-- Fix security warnings - set search_path for all functions
ALTER FUNCTION public.update_updated_at_column() SET search_path = '';
ALTER FUNCTION public.handle_new_user() SET search_path = '';

-- Create secure function for user authentication and profile checks
CREATE OR REPLACE FUNCTION public.get_current_user_profile(user_uuid UUID DEFAULT auth.uid())
RETURNS JSONB AS $$
DECLARE
  profile_data JSONB;
BEGIN
  SELECT jsonb_build_object(
    'id', id,
    'user_id', user_id,
    'full_name', full_name,
    'phone', phone,
    'client_id', client_id,
    'verification_status', verification_status,
    'investment_tier', investment_tier,
    'kyc_status', kyc_status,
    'onboarding_completed', onboarding_completed
  ) INTO profile_data
  FROM public.profiles
  WHERE user_id = user_uuid;
  
  RETURN profile_data;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = '';

-- Create function for AI portfolio recommendations
CREATE OR REPLACE FUNCTION public.generate_ai_portfolio_recommendation(
  investment_amount INTEGER,
  risk_tolerance TEXT DEFAULT 'moderate',
  investment_objectives TEXT DEFAULT ''
)
RETURNS JSONB AS $$
DECLARE
  recommendation JSONB;
  suitable_blocks JSONB;
BEGIN
  -- Select suitable wealth blocks based on investment amount and risk tolerance
  SELECT jsonb_agg(
    jsonb_build_object(
      'block_code', block_code,
      'block_name', block_name,
      'description', description,
      'roi_range', roi_range,
      'minimum_investment', minimum_investment,
      'current_capacity', current_capacity,
      'max_capacity', max_capacity,
      'availability_status', 
        CASE 
          WHEN current_capacity >= max_capacity THEN 'closed'
          WHEN current_capacity >= (max_capacity * 0.9) THEN 'limited'
          ELSE 'open'
        END
    )
  ) INTO suitable_blocks
  FROM public.wealth_blocks 
  WHERE minimum_investment <= investment_amount
    AND block_status = 'open'
    AND current_capacity < max_capacity
  ORDER BY 
    CASE risk_tolerance
      WHEN 'low' THEN CASE WHEN risk_level = 'conservative' THEN 1 ELSE 2 END
      WHEN 'moderate' THEN CASE WHEN risk_level = 'moderate' THEN 1 ELSE 2 END
      WHEN 'high' THEN CASE WHEN risk_level = 'aggressive' THEN 1 ELSE 2 END
      ELSE 2
    END,
    minimum_investment DESC;

  -- Build AI recommendation
  recommendation := jsonb_build_object(
    'recommended_blocks', COALESCE(suitable_blocks, '[]'::jsonb),
    'investment_amount', investment_amount,
    'risk_profile', risk_tolerance,
    'diversification_strategy', jsonb_build_object(
      'primary_allocation', 70,
      'secondary_allocation', 20,
      'cash_reserve', 10
    ),
    'projected_timeline', '24-36 months',
    'expected_roi_range', 
      CASE 
        WHEN investment_amount >= 1000000 THEN '15-23%'
        WHEN investment_amount >= 500000 THEN '11-18%'
        ELSE '8-14%'
      END,
    'generated_at', now()
  );

  RETURN recommendation;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = '';

-- Create function for wealth simulation
CREATE OR REPLACE FUNCTION public.create_wealth_simulation(
  user_uuid UUID DEFAULT auth.uid(),
  simulation_input JSONB DEFAULT '{}'::jsonb
)
RETURNS UUID AS $$
DECLARE
  simulation_id UUID;
  ai_output JSONB;
  investment_amount INTEGER;
  risk_tolerance TEXT;
BEGIN
  -- Extract input parameters
  investment_amount := (simulation_input->>'investment_amount')::INTEGER;
  risk_tolerance := COALESCE(simulation_input->>'risk_tolerance', 'moderate');
  
  -- Generate AI recommendation
  ai_output := public.generate_ai_portfolio_recommendation(
    investment_amount, 
    risk_tolerance,
    simulation_input->>'objectives'
  );
  
  -- Insert simulation record
  INSERT INTO public.wealth_simulations (
    user_id,
    input_data,
    ai_output,
    risk_assessment,
    allocation_strategy,
    projected_returns
  ) VALUES (
    user_uuid,
    simulation_input,
    ai_output,
    jsonb_build_object('risk_level', risk_tolerance, 'score', random() * 100),
    ai_output->'diversification_strategy',
    jsonb_build_object(
      'roi_range', ai_output->>'expected_roi_range',
      'timeline', ai_output->>'projected_timeline'
    )
  ) RETURNING id INTO simulation_id;
  
  RETURN simulation_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Create function to safely update access protocol submissions
CREATE OR REPLACE FUNCTION public.update_access_submission(
  submission_id UUID,
  updates JSONB
)
RETURNS BOOLEAN AS $$
DECLARE
  user_uuid UUID := auth.uid();
BEGIN
  -- Verify ownership
  IF NOT EXISTS (
    SELECT 1 FROM public.access_protocol_submissions 
    WHERE id = submission_id AND user_id = user_uuid
  ) THEN
    RETURN FALSE;
  END IF;
  
  -- Update the submission
  UPDATE public.access_protocol_submissions 
  SET 
    full_name = COALESCE(updates->>'full_name', full_name),
    email = COALESCE(updates->>'email', email),
    phone = COALESCE(updates->>'phone', phone),
    investment_amount = COALESCE((updates->>'investment_amount')::INTEGER, investment_amount),
    investment_intent = COALESCE(updates->>'investment_intent', investment_intent),
    experience_level = COALESCE(updates->>'experience_level', experience_level),
    objectives = COALESCE(updates->>'objectives', objectives),
    risk_tolerance = COALESCE(updates->>'risk_tolerance', risk_tolerance),
    gate_completed = COALESCE((updates->>'gate_completed')::INTEGER, gate_completed),
    verification_completed = COALESCE((updates->>'verification_completed')::BOOLEAN, verification_completed),
    portfolio_mirror_generated = COALESCE((updates->>'portfolio_mirror_generated')::BOOLEAN, portfolio_mirror_generated),
    submission_status = COALESCE(updates->>'submission_status', submission_status),
    updated_at = now()
  WHERE id = submission_id AND user_id = user_uuid;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';
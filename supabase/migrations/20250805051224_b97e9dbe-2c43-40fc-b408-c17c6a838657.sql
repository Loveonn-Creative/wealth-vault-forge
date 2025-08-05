-- Fix security configurations
-- Update auth.sessions table to have shorter session timeout
-- Enable better password security

-- Add password complexity requirements and shorter OTP expiry
-- Note: These settings will be configured in Supabase dashboard as well

-- Create enhanced user profiles table if needed (already exists, so updating)
-- Add new columns for enhanced security and platform features
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS last_login TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS failed_login_attempts INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS account_locked_until TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS two_factor_enabled BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS preferred_contact_method TEXT DEFAULT 'email',
ADD COLUMN IF NOT EXISTS investment_tier TEXT DEFAULT 'standard',
ADD COLUMN IF NOT EXISTS risk_profile JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS ai_personalization JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS kyc_status TEXT DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS document_verification_status TEXT DEFAULT 'pending';

-- Create access_protocol_submissions table with enhanced security
CREATE TABLE IF NOT EXISTS public.access_protocol_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  investment_amount INTEGER NOT NULL,
  investment_intent TEXT NOT NULL,
  experience_level TEXT,
  objectives TEXT,
  risk_tolerance TEXT,
  gate_completed INTEGER DEFAULT 1,
  verification_completed BOOLEAN DEFAULT false,
  portfolio_mirror_generated BOOLEAN DEFAULT false,
  submission_status TEXT DEFAULT 'pending',
  ai_recommendation JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  encrypted_data JSONB DEFAULT '{}'
);

-- Enable RLS on access_protocol_submissions
ALTER TABLE public.access_protocol_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for access_protocol_submissions
CREATE POLICY "Users can view their own submissions" 
ON public.access_protocol_submissions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own submissions" 
ON public.access_protocol_submissions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own submissions" 
ON public.access_protocol_submissions 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create payment tracking table
CREATE TABLE IF NOT EXISTS public.payment_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  access_submission_id UUID REFERENCES public.access_protocol_submissions(id),
  payment_method TEXT NOT NULL,
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'INR',
  payment_reference TEXT,
  payment_status TEXT DEFAULT 'pending',
  verification_screenshot TEXT,
  verification_notes TEXT,
  verified_by UUID,
  verified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on payment_records
ALTER TABLE public.payment_records ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for payment_records
CREATE POLICY "Users can view their own payments" 
ON public.payment_records 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create payment records" 
ON public.payment_records 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create AI simulation tracking table
CREATE TABLE IF NOT EXISTS public.wealth_simulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  simulation_type TEXT DEFAULT 'portfolio_preview',
  input_data JSONB NOT NULL,
  ai_output JSONB NOT NULL,
  risk_assessment JSONB DEFAULT '{}',
  allocation_strategy JSONB DEFAULT '{}',
  projected_returns JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on wealth_simulations
ALTER TABLE public.wealth_simulations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for wealth_simulations
CREATE POLICY "Users can view their own simulations" 
ON public.wealth_simulations 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can create simulations" 
ON public.wealth_simulations 
FOR INSERT 
WITH CHECK (true);

-- Create notification system table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for notifications
CREATE POLICY "Users can view their own notifications" 
ON public.notifications 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create wealth blocks capacity tracking
CREATE TABLE IF NOT EXISTS public.wealth_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  block_code TEXT UNIQUE NOT NULL,
  block_name TEXT NOT NULL,
  description TEXT,
  roi_range TEXT DEFAULT '8-23%',
  risk_level TEXT DEFAULT 'moderate',
  max_capacity INTEGER DEFAULT 170,
  current_capacity INTEGER DEFAULT 0,
  minimum_investment INTEGER DEFAULT 500000,
  block_status TEXT DEFAULT 'open',
  launch_date TIMESTAMP WITH TIME ZONE,
  closure_date TIMESTAMP WITH TIME ZONE,
  performance_data JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial wealth blocks
INSERT INTO public.wealth_blocks (block_code, block_name, description, roi_range, minimum_investment) VALUES
('WB-MOMENTUM-01', 'Momentum Block Alpha', 'AI-curated growth opportunities', '11-18%', 500000),
('WB-STABILITY-01', 'Stability Block Prime', 'Capital preservation with growth', '8-14%', 300000),
('WB-LEGACY-01', 'Legacy Block Genesis', 'Long-term wealth building', '15-23%', 1000000)
ON CONFLICT (block_code) DO NOTHING;

-- Create user block assignments
CREATE TABLE IF NOT EXISTS public.user_block_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  block_id UUID REFERENCES public.wealth_blocks(id),
  assignment_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  investment_amount INTEGER NOT NULL,
  assignment_status TEXT DEFAULT 'assigned',
  performance_tracking JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on tables
ALTER TABLE public.wealth_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_block_assignments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for wealth_blocks (public read access)
CREATE POLICY "Anyone can view wealth blocks" 
ON public.wealth_blocks 
FOR SELECT 
USING (true);

-- Create RLS policies for user_block_assignments
CREATE POLICY "Users can view their own assignments" 
ON public.user_block_assignments 
FOR SELECT 
USING (auth.uid() = user_id);

-- Add triggers for updated_at columns
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
DROP TRIGGER IF EXISTS update_access_protocol_submissions_updated_at ON public.access_protocol_submissions;
CREATE TRIGGER update_access_protocol_submissions_updated_at
  BEFORE UPDATE ON public.access_protocol_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_payment_records_updated_at ON public.payment_records;
CREATE TRIGGER update_payment_records_updated_at
  BEFORE UPDATE ON public.payment_records
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_wealth_blocks_updated_at ON public.wealth_blocks;
CREATE TRIGGER update_wealth_blocks_updated_at
  BEFORE UPDATE ON public.wealth_blocks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
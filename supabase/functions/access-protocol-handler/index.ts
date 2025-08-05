import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AccessSubmissionRequest {
  full_name: string;
  email: string;
  phone?: string;
  investment_amount: number;
  investment_intent: string;
  experience_level?: string;
  objectives?: string;
  risk_tolerance?: string;
  gate_completed: number;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get authenticated user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const submissionData: AccessSubmissionRequest = await req.json();
    console.log("Processing access submission for user:", user.id);

    // Validate investment amount
    if (submissionData.investment_amount < 300000) {
      return new Response(
        JSON.stringify({ 
          error: "Minimum investment amount is ₹3,00,000",
          code: "MINIMUM_INVESTMENT_NOT_MET"
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if user already has a submission
    const { data: existingSubmission } = await supabaseClient
      .from('access_protocol_submissions')
      .select('*')
      .eq('user_id', user.id)
      .single();

    let submissionResult;

    if (existingSubmission) {
      // Update existing submission
      const { data, error } = await supabaseClient
        .from('access_protocol_submissions')
        .update({
          full_name: submissionData.full_name,
          email: submissionData.email,
          phone: submissionData.phone,
          investment_amount: submissionData.investment_amount,
          investment_intent: submissionData.investment_intent,
          experience_level: submissionData.experience_level,
          objectives: submissionData.objectives,
          risk_tolerance: submissionData.risk_tolerance,
          gate_completed: Math.max(existingSubmission.gate_completed, submissionData.gate_completed),
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;
      submissionResult = data;
    } else {
      // Create new submission
      const { data, error } = await supabaseClient
        .from('access_protocol_submissions')
        .insert({
          user_id: user.id,
          full_name: submissionData.full_name,
          email: submissionData.email,
          phone: submissionData.phone,
          investment_amount: submissionData.investment_amount,
          investment_intent: submissionData.investment_intent,
          experience_level: submissionData.experience_level,
          objectives: submissionData.objectives,
          risk_tolerance: submissionData.risk_tolerance,
          gate_completed: submissionData.gate_completed,
          submission_status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;
      submissionResult = data;
    }

    // Generate AI portfolio recommendation if at gate 3 or higher
    let aiRecommendation = null;
    if (submissionData.gate_completed >= 3) {
      const { data: recommendation } = await supabaseClient
        .rpc('generate_ai_portfolio_recommendation', {
          investment_amount: submissionData.investment_amount,
          risk_tolerance: submissionData.risk_tolerance || 'moderate',
          investment_objectives: submissionData.objectives || ''
        });

      aiRecommendation = recommendation;

      // Update submission with AI recommendation
      await supabaseClient
        .from('access_protocol_submissions')
        .update({
          ai_recommendation: recommendation,
          portfolio_mirror_generated: true
        })
        .eq('id', submissionResult.id);
    }

    // Update user profile with submission data
    await supabaseClient
      .from('profiles')
      .update({
        full_name: submissionData.full_name,
        phone: submissionData.phone,
        investment_amount: submissionData.investment_amount,
        intent: submissionData.investment_intent
      })
      .eq('user_id', user.id);

    // Send notification
    await supabaseClient
      .from('notifications')
      .insert({
        user_id: user.id,
        notification_type: 'access_submission',
        title: 'Access Protocol Submission Received',
        message: `Your Gate ${submissionData.gate_completed} submission has been processed successfully.`,
        metadata: {
          gate_completed: submissionData.gate_completed,
          investment_amount: submissionData.investment_amount
        }
      });

    console.log("Access submission processed successfully:", submissionResult.id);

    return new Response(
      JSON.stringify({
        success: true,
        submission: submissionResult,
        ai_recommendation: aiRecommendation,
        next_steps: generateNextSteps(submissionData.gate_completed)
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error("Error in access protocol handler:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to process access submission"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function generateNextSteps(gateCompleted: number): string[] {
  switch (gateCompleted) {
    case 1:
      return [
        "Complete verification documentation",
        "Prepare investment experience details",
        "Review risk tolerance assessment"
      ];
    case 2:
      return [
        "Review AI-generated portfolio recommendations",
        "Analyze risk-return projections",
        "Prepare for final verification"
      ];
    case 3:
      return [
        "Review portfolio mirror results",
        "Complete final security protocols",
        "Prepare for payment processing"
      ];
    case 4:
      return [
        "Submit payment verification",
        "Complete KYC documentation",
        "Access your personalized dashboard"
      ];
    default:
      return ["Continue to next gate"];
  }
}
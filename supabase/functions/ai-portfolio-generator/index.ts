import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AIPortfolioRequest {
  investment_amount: number;
  risk_tolerance: 'low' | 'moderate' | 'high';
  investment_objectives: string;
  time_horizon: string;
  experience_level: string;
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

    const { investment_amount, risk_tolerance, investment_objectives, time_horizon, experience_level }: AIPortfolioRequest = await req.json();

    console.log("Generating AI portfolio for:", { investment_amount, risk_tolerance });

    // Generate AI-powered portfolio recommendation
    const { data: aiRecommendation, error: aiError } = await supabaseClient
      .rpc('generate_ai_portfolio_recommendation', {
        investment_amount,
        risk_tolerance,
        investment_objectives
      });

    if (aiError) {
      console.error("AI recommendation error:", aiError);
      throw new Error("Failed to generate portfolio recommendation");
    }

    // Enhanced AI logic for more sophisticated recommendations
    const enhancedRecommendation = {
      ...aiRecommendation,
      ai_insights: generateAIInsights(investment_amount, risk_tolerance, experience_level),
      market_conditions: generateMarketAnalysis(),
      personalization: generatePersonalizationTips(investment_objectives, time_horizon),
      confidence_score: calculateConfidenceScore(investment_amount, risk_tolerance)
    };

    // Store simulation for analytics
    const { data: simulationId } = await supabaseClient
      .rpc('create_wealth_simulation', {
        simulation_input: {
          investment_amount,
          risk_tolerance,
          objectives: investment_objectives,
          time_horizon,
          experience_level
        }
      });

    console.log("AI portfolio generated successfully:", simulationId);

    return new Response(
      JSON.stringify({
        success: true,
        recommendation: enhancedRecommendation,
        simulation_id: simulationId
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error("Error in AI portfolio generation:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to generate portfolio recommendation"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function generateAIInsights(amount: number, risk: string, experience: string): string[] {
  const insights = [];
  
  if (amount >= 1000000) {
    insights.push("High-net-worth allocation strategy recommended with diversified institutional-grade instruments");
    insights.push("Access to exclusive private market opportunities");
  } else if (amount >= 500000) {
    insights.push("Balanced growth strategy with moderate risk exposure");
    insights.push("Suitable for wealth accumulation phase");
  } else {
    insights.push("Foundation-building approach with emphasis on capital preservation");
  }

  if (risk === 'low') {
    insights.push("Conservative allocation prioritizing stability over aggressive growth");
  } else if (risk === 'high') {
    insights.push("Growth-focused strategy accepting higher volatility for potential returns");
  }

  if (experience === 'beginner') {
    insights.push("Simplified portfolio structure recommended for ease of understanding");
  } else if (experience === 'advanced') {
    insights.push("Sophisticated strategies available leveraging complex instruments");
  }

  return insights;
}

function generateMarketAnalysis(): object {
  return {
    market_sentiment: "Cautiously optimistic",
    key_trends: [
      "Private credit markets showing resilience",
      "Alternative investments gaining institutional adoption",
      "Technology sector stabilization expected"
    ],
    risk_factors: [
      "Global monetary policy transitions",
      "Geopolitical uncertainties",
      "Market liquidity considerations"
    ],
    opportunities: [
      "Emerging market debt recovery",
      "Real estate sector normalization",
      "ESG investment growth"
    ]
  };
}

function generatePersonalizationTips(objectives: string, timeHorizon: string): string[] {
  const tips = [];
  
  if (objectives.toLowerCase().includes('retirement')) {
    tips.push("Consider increasing allocation to stable income-generating assets");
    tips.push("Tax-efficient structures may enhance long-term wealth accumulation");
  }
  
  if (objectives.toLowerCase().includes('growth')) {
    tips.push("Growth-oriented equity strategies align with your objectives");
    tips.push("Consider global diversification for enhanced return potential");
  }
  
  if (timeHorizon.includes('long')) {
    tips.push("Long-term horizon allows for higher growth allocation");
    tips.push("Dollar-cost averaging strategy may reduce timing risk");
  }
  
  return tips;
}

function calculateConfidenceScore(amount: number, risk: string): number {
  let score = 85; // Base confidence
  
  if (amount >= 500000) score += 10; // Higher amounts = better diversification
  if (risk === 'moderate') score += 5; // Balanced risk = higher confidence
  
  return Math.min(score, 95); // Cap at 95%
}
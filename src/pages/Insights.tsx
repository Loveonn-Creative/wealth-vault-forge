import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TrendingUp, Activity, Brain, BarChart3, Shield, Zap } from 'lucide-react';

const Insights = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="live-indicator mb-6">
                AI Intelligence Active
              </div>
              <h1 className="text-title font-bold text-foreground mb-6">
                Investment Intelligence Dashboard
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Real-time AI-powered insights into private capital markets and wealth engineering strategies
              </p>
            </div>
          </div>
        </section>

        {/* Real-Time Dashboard */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Capital Flows */}
              <div className="dashboard-tile reveal-stagger-1 ai-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-emerald" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">Capital Flows</h3>
                  </div>
                  <div className="live-indicator">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-emerald">₹47.2Cr</div>
                  <p className="text-sm text-muted-foreground">
                    Deployed across 23 private funds this quarter
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">PE Allocation</span>
                      <span className="text-foreground">65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-emerald h-2 rounded-full w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Heatmap */}
              <div className="dashboard-tile reveal-stagger-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Activity className="text-emerald" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">Risk Pulse</h3>
                  </div>
                  <div className="w-3 h-3 bg-emerald rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-emerald">2.4/10</div>
                  <p className="text-sm text-muted-foreground">
                    Portfolio risk score - Optimal range
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 bg-emerald/20 rounded text-center">
                      <div className="text-xs text-emerald font-medium">Low</div>
                    </div>
                    <div className="p-2 bg-muted rounded text-center">
                      <div className="text-xs text-muted-foreground">Med</div>
                    </div>
                    <div className="p-2 bg-muted rounded text-center">
                      <div className="text-xs text-muted-foreground">High</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Signals */}
              <div className="dashboard-tile reveal-stagger-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Brain className="text-emerald" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">AI Signals</h3>
                  </div>
                  <div className="text-xs text-emerald font-medium">3 Active</div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-emerald/10 rounded-lg border border-emerald/20">
                    <div className="text-sm font-medium text-emerald">Opportunity Alert</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Pre-IPO fund opening Monday
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium text-foreground">Rebalance Due</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Momentum Block - Next week
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Intelligence */}
        <section className="space-premium bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-foreground mb-6">
                Market Intelligence Engine
              </h2>
              <p className="text-xl text-muted-foreground">
                AI-curated insights from 47 data sources, updated every 6 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Wealth Engineering */}
              <div className="research-card p-8 reveal-stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Wealth Engineering Patterns</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced frameworks for systematic wealth multiplication through AI-optimized private capital allocation. Our proprietary algorithms identify structural opportunities 73% faster than traditional analysis.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Compound Efficiency</span>
                      <span className="text-emerald font-medium">94.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Risk-Adjusted Alpha</span>
                      <span className="text-emerald font-medium">+3.7%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Intelligence */}
              <div className="research-card p-8 reveal-stagger-2">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Defense Architecture</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Multi-layered risk management protocols that have protected capital through 47 market events since 2015. Zero defaults achieved through predictive modeling and defensive positioning.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Crisis Survival Rate</span>
                      <span className="text-emerald font-medium">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Recovery Speed</span>
                      <span className="text-emerald font-medium">3.2x faster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Intelligence */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="research-card p-12 text-center">
              <Zap className="text-emerald mx-auto mb-6" size={48} />
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Exclusive Intelligence Access
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Real-time market intelligence, risk assessments, and opportunity alerts available exclusively to verified Wealth Blocks members.
              </p>
              
              <div className="inline-flex items-center gap-2 text-emerald font-medium">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                Intelligence engine active
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
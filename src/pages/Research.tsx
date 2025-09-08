import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Search, Target, TrendingUp, PieChart, FileText, Database, Eye, Lock } from 'lucide-react';

const Research = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
         <section className="space-premium bg-black">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                 <Database className="w-4 h-4 animate-pulse" />
                 Research Engine Active
               </div>
               <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                 MARKET INTELLIGENCE
                 <br />
                 <span className="bg-gradient-to-r from-emerald via-gold to-emerald bg-clip-text text-transparent">
                   LABORATORY
                 </span>
               </h1>
               <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                 AI-powered research engine analyzing private capital markets across 847 data streams
               </p>
             </div>
           </div>
         </section>

        {/* Portfolio Gap Analysis */}
        <section className="space-premium bg-muted/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-foreground mb-6">
                The Silent Gap in Your Portfolio
              </h2>
              <p className="text-xl text-muted-foreground">
                Audit your portfolio's hidden inefficiencies
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Traditional Holdings */}
              <div className="research-card p-8 reveal-stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="text-muted-foreground" size={24} />
                  <h3 className="text-lg font-semibold text-foreground">Traditional Holdings</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fixed Deposits</span>
                      <span className="text-muted-foreground">4-6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Mutual Funds</span>
                      <span className="text-muted-foreground">9-11%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Real Estate</span>
                      <span className="text-muted-foreground">7-9%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <p className="text-sm text-destructive font-medium">Inflation Gap: -1% to -3%</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Real purchasing power declining
                    </p>
                  </div>
                </div>
              </div>

              {/* Wealth Blocks Alternative */}
              <div className="research-card p-8 reveal-stagger-2 border-emerald/30">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-emerald" size={24} />
                  <h3 className="text-lg font-semibold text-foreground">Wealth Blocks Engine</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Prime Block</span>
                      <span className="text-emerald font-medium">8-12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Momentum Block</span>
                      <span className="text-emerald font-medium">11-18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Legacy Block</span>
                      <span className="text-emerald font-medium">15-23%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-emerald/10 rounded-lg border border-emerald/20">
                    <p className="text-sm text-emerald font-medium">Wealth Gap: +4% to +16%</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Compounding acceleration active
                    </p>
                  </div>
                </div>
              </div>

              {/* The Mathematics */}
              <div className="research-card p-8 reveal-stagger-3">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="text-emerald" size={24} />
                  <h3 className="text-lg font-semibold text-foreground">Capital Velocity</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/5 rounded-lg">
                    <div className="text-2xl font-bold text-emerald">₹10L → ₹14.7L</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      In 24 months vs ₹9.2L in FDs
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Same timeframe. Engineered returns. Zero stock market volatility.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capital protection</span>
                      <span className="text-emerald">100%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Liquidity window</span>
                      <span className="text-emerald">24 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Pillars */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-foreground mb-6">
                Research Architecture
              </h2>
              <p className="text-xl text-muted-foreground">
                Four pillars of capital intelligence, engineered for precision
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Private Market Analysis */}
              <div className="research-card p-8 reveal-stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Private Market Analysis</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our AI research engine continuously analyzes private market trends, regulatory changes, and opportunity landscapes to identify high-performance investment vehicles before they become mainstream.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-emerald/10 rounded-lg text-center">
                      <div className="text-lg font-bold text-emerald">847</div>
                      <div className="text-xs text-muted-foreground">Funds analyzed</div>
                    </div>
                    <div className="p-3 bg-emerald/10 rounded-lg text-center">
                      <div className="text-lg font-bold text-emerald">23</div>
                      <div className="text-xs text-muted-foreground">Selected funds</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <p className="text-sm text-foreground font-medium">Latest Finding:</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pre-IPO credit instruments showing 34% higher survival rates than traditional PE
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk Intelligence */}
              <div className="research-card p-8 reveal-stagger-2">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Risk Intelligence</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced risk modeling and scenario analysis for private capital instruments, providing transparency and confidence in every investment decision through predictive analytics.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Crisis simulation accuracy</span>
                      <span className="text-emerald font-medium">96.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Early warning triggers</span>
                      <span className="text-emerald font-medium">0.5% threshold</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Default prevention rate</span>
                      <span className="text-emerald font-medium">100%</span>
                    </div>
                  </div>
                  
                  <div className="live-indicator">
                    Risk engine monitoring 23 funds
                  </div>
                </div>
              </div>

              {/* Exclusive Reports */}
              <div className="research-card p-8 reveal-stagger-3">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Intelligence Reports</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Quarterly deep-dive reports on emerging private capital opportunities, available exclusively to verified Wealth Blocks members with institutional-grade insights.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-emerald/10 rounded-lg border border-emerald/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock size={16} className="text-emerald" />
                        <span className="text-sm font-medium text-emerald">Q4 2024 Intelligence Brief</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Offshore fund regulations & impact analysis
                      </p>
                    </div>
                    
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye size={16} className="text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">Opportunity Tracker</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Real-time fund opening alerts & allocation strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Precision Framework */}
              <div className="research-card p-8 reveal-stagger-4">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-foreground">Precision vs Promises</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our 21-parameter risk framework eliminates 83% of funds before they reach you. Each selection survives 5-year stress tests and manager net worth audits.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-emerald/5 rounded-lg">
                      <div className="text-sm font-medium text-emerald mb-1">🛡️ Defense Protocol</div>
                      <p className="text-xs text-muted-foreground">
                        Caps any fund at 15% of capital, auto-exit at 0.5% distress signals
                      </p>
                    </div>
                    
                    <div className="p-3 bg-emerald/5 rounded-lg">
                      <div className="text-sm font-medium text-emerald mb-1">🤖 AI Operations</div>
                      <p className="text-xs text-muted-foreground">
                        Balances for drawdowns, hunts consistency, minus human bias
                      </p>
                    </div>
                    
                    <div className="p-3 bg-emerald/5 rounded-lg">
                      <div className="text-sm font-medium text-emerald mb-1">🔐 Private Design</div>
                      <p className="text-xs text-muted-foreground">
                        Manual verification, custom blocks, zero mass onboarding
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Access CTA */}
        <section className="space-premium bg-gradient-to-br from-emerald/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="research-card p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Access Research Intelligence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Real-time market research, risk assessments, and opportunity intelligence available exclusively to verified members.
              </p>
              
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="live-indicator">Research engine active</div>
                <div className="text-sm text-muted-foreground">•</div>
                <div className="text-sm text-emerald font-medium">847 funds under analysis</div>
              </div>
              
              <Link 
                to="/access"
                className="inline-flex items-center gap-2 bg-emerald text-emerald-foreground px-8 py-4 rounded-lg hover:bg-emerald/90 transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                Request Research Access →
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;
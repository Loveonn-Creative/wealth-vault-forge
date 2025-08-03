import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Brain, Lock, TrendingUp, Activity } from 'lucide-react';

const Architecture = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium bg-black">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-8">
                <Brain className="w-4 h-4" />
                AI Capital Architecture
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                How We Make Your Money Work Smarter
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
                The deep-tech architecture behind India's first zero-default private capital engine
              </p>
              
              <div className="bg-emerald/10 border border-emerald/20 p-6 lg:p-8 rounded-xl">
                <p className="text-base lg:text-lg font-semibold text-emerald">
                  9 years of zero defaults. AI that rejects 98% of what 'smart money' calls opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Logic Timeline/Flowchart */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                Backend AI Logic & Safety Nets
              </h2>
              <p className="text-base lg:text-xl text-gray-400">
                Visualized: How AI protects and grows your capital through three critical filters
              </p>
            </div>

            {/* Animated Flow */}
            <div className="relative">
              {/* Flow Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent animate-pulse"></div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                {/* Filter 1 */}
                <div className="dashboard-tile group bg-gray-900/50 border border-emerald/20 hover:border-emerald/40 p-6 lg:p-8 transition-all duration-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald/10 rounded-lg">
                      <Shield className="text-emerald" size={20} />
                    </div>
                    <div className="live-indicator text-xs">
                      <Activity className="w-3 h-3" />
                      Active
                    </div>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4">Crisis-Proof DNA</h3>
                  
                  <ul className="space-y-3 text-gray-300 text-sm lg:text-base">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Survived 2018 NBFC + 2020 pandemic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>2x liquidity stress tests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>37 funds rejected in 2024</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-3 bg-emerald/10 rounded-lg">
                    <div className="text-emerald font-bold text-sm">98% Rejection Rate</div>
                    <div className="text-gray-400 text-xs">Only crisis-tested funds pass</div>
                  </div>
                </div>

                {/* Filter 2 */}
                <div className="dashboard-tile group bg-gray-900/50 border border-emerald/20 hover:border-emerald/40 p-6 lg:p-8 transition-all duration-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald/10 rounded-lg">
                      <Lock className="text-emerald" size={20} />
                    </div>
                    <div className="live-indicator text-xs">
                      <Activity className="w-3 h-3" />
                      Active
                    </div>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4">Skin-in-Game Mandate</h3>
                  
                  <ul className="space-y-3 text-gray-300 text-sm lg:text-base">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>15% personal wealth minimum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>6-month net worth audits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Zero anonymous managers</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-3 bg-emerald/10 rounded-lg">
                    <div className="text-emerald font-bold text-sm">100% Accountability</div>
                    <div className="text-gray-400 text-xs">Managers risk their own money</div>
                  </div>
                </div>

                {/* Filter 3 */}
                <div className="dashboard-tile group bg-gray-900/50 border border-emerald/20 hover:border-emerald/40 p-6 lg:p-8 transition-all duration-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald/10 rounded-lg">
                      <Brain className="text-emerald" size={20} />
                    </div>
                    <div className="live-indicator text-xs">
                      <Activity className="w-3 h-3" />
                      Active
                    </div>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4">AI Liquidity Engine</h3>
                  
                  <ul className="space-y-3 text-gray-300 text-sm lg:text-base">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Real-time redemption tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>0.5% distress threshold</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>89% crisis prevention rate</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-3 bg-emerald/10 rounded-lg">
                    <div className="text-emerald font-bold text-sm">24/7 Monitoring</div>
                    <div className="text-gray-400 text-xs">AI predicts problems early</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payout Triggers */}
            <div className="mt-12 lg:mt-16">
              <div className="dashboard-tile bg-gray-900/30 border border-emerald/10 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-emerald mb-6 text-center">Automated Payout Triggers</h3>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-lg font-bold text-emerald">18M</div>
                    <div className="text-xs text-gray-400">First liquidity window opens</div>
                  </div>
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-lg font-bold text-emerald">24M</div>
                    <div className="text-xs text-gray-400">Full exit readiness</div>
                  </div>
                  <div className="text-center p-4 bg-gold/10 rounded-lg">
                    <div className="text-lg font-bold text-gold">+1.5%</div>
                    <div className="text-xs text-gray-400">Renewal bonus rate</div>
                  </div>
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-lg font-bold text-emerald">72%</div>
                    <div className="text-xs text-gray-400">Members renew</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 24-Month Capital Algorithm */}
        <section className="space-premium bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                The 24-Month Capital Algorithm
              </h2>
              <p className="text-xl text-gray-300">
                How Wealth Blocks Turns Time Into Compound Leverage With AI
              </p>
              <p className="text-lg text-gray-400 mt-4">
                Your 24-month horizon isn't a lock-in - it's a strategic advantage:
              </p>
            </div>

            <div className="space-y-8">
              {/* Phase 1 - Enhanced Design */}
              <div className="dashboard-tile bg-gray-900/50 border border-emerald/20 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-emerald/10 rounded-lg">
                        <div className="w-6 h-6 bg-emerald rounded-full animate-pulse"></div>
                      </div>
                      <div className="live-indicator text-sm">
                        <Activity className="w-3 h-3" />
                        Phase 1 Active
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-emerald mb-4">Phase 1: Capital Deployment (Months 0-3)</h3>
                    <p className="text-base lg:text-lg text-gray-300 mb-6">Initial Allocation & Risk Assessment</p>
                    
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">Initial capital deployment across vetted funds</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">AI risk profiling and allocation optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">Foundation setting for 24-month cycle</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/5 to-gray-800/50 p-6 lg:p-8 rounded-lg">
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Phase 1 Metrics</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-emerald/10 rounded-lg">
                        <div className="text-lg font-bold text-emerald">100%</div>
                        <div className="text-xs text-gray-400">Capital Deployed</div>
                      </div>
                      <div className="text-center p-3 bg-emerald/10 rounded-lg">
                        <div className="text-lg font-bold text-emerald">3M</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <p className="text-emerald font-medium text-sm">Initial deployment phase with AI-optimized allocation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 - Enhanced Design */}
              <div className="dashboard-tile bg-gray-900/50 border border-emerald/20 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-emerald/10 rounded-lg">
                        <div className="w-6 h-6 bg-emerald rounded-full animate-pulse"></div>
                      </div>
                      <div className="live-indicator text-sm">
                        <Activity className="w-3 h-3" />
                        Phase 2 Active
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-emerald mb-4">Phase 2: Dynamic Harvest Cycle (Months 4-18)</h3>
                    <p className="text-base lg:text-lg text-gray-300 mb-6">Active Management & Performance Optimization</p>
                    
                    <ul className="space-y-4 text-gray-300 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">Continuous portfolio rebalancing and optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">AI-driven performance harvesting across cycles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">Dynamic risk management and opportunity capture</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-800/50 p-4 rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        <span className="text-emerald font-semibold text-sm">Continuous monitoring and optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        <span className="text-emerald font-semibold text-sm">Performance harvesting across market cycles</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        <span className="text-emerald font-semibold text-sm">Risk-adjusted return optimization</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/5 to-gray-800/50 p-6 lg:p-8 rounded-lg">
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Phase 2 Metrics</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-emerald/10 rounded-lg">
                        <div className="text-lg font-bold text-emerald">15%</div>
                        <div className="text-xs text-gray-400">Max Fund Exposure</div>
                      </div>
                      <div className="text-center p-3 bg-emerald/10 rounded-lg">
                        <div className="text-lg font-bold text-emerald">15M</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <p className="text-emerald font-medium text-sm">Active management phase with systematic performance harvesting</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 - Enhanced Design */}
              <div className="dashboard-tile bg-gray-900/50 border border-emerald/20 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-emerald/10 rounded-lg">
                        <div className="w-6 h-6 bg-emerald rounded-full animate-pulse"></div>
                      </div>
                      <div className="live-indicator text-sm">
                        <Activity className="w-3 h-3" />
                        Phase 3 Ready
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-emerald mb-4">Phase 3: Liquidity Orchestration (Months 19-24)</h3>
                    <p className="text-base lg:text-lg text-gray-300 mb-6">Liquidity Preparation & Exit Optimization</p>
                    
                    <ul className="space-y-4 text-gray-300 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">Systematic shift to liquid instruments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                        <span className="text-sm lg:text-base">Prepares for your choice:</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-800/50 p-4 rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        <span className="text-emerald font-semibold text-sm">Withdraw (Full liquidity)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        <span className="text-emerald font-semibold text-sm">Auto-Renew (Next cycle at +1.5% preferential rate)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
                        <span className="text-emerald font-semibold text-sm">Upsize (Seamless tier upgrade)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/5 to-gray-800/50 p-6 lg:p-8 rounded-lg">
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Phase 3 Metrics</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-emerald/10 rounded-lg">
                        <div className="text-lg font-bold text-emerald">72%</div>
                        <div className="text-xs text-gray-400">Renew Rate</div>
                      </div>
                      <div className="text-center p-3 bg-emerald/10 rounded-lg">
                        <div className="text-lg font-bold text-emerald">6M</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald/5 rounded-lg">
                      <p className="text-emerald font-medium text-sm">Liquidity optimization with flexible exit strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-emerald font-semibold">
                72% of investors renew - not because they must, but because the math works and system rewards patience.
              </p>
              <p className="text-muted-foreground mt-4">
                Result: You're never trapped during exits like in PMS or AIFs
              </p>
            </div>
          </div>
        </section>

        {/* Silent Compounding Trigger */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                The Silent Compounding Trigger
              </h2>
              <p className="text-xl text-muted-foreground">
                Most "compound returns" are marketing. Ours is mechanical.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="dashboard-tile p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">18%</div>
                  <div className="text-muted-foreground">Early Warning Trigger</div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  If any fund hits 18% loss, AI auto-liquidates and redistributes to top performers
                </p>
              </div>

              <div className="dashboard-tile p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">72%</div>
                  <div className="text-muted-foreground">Renewal Rate</div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Members don't just stay - they upgrade tiers after seeing 24-month results
                </p>
              </div>

              <div className="dashboard-tile p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">+1.5%</div>
                  <div className="text-muted-foreground">Loyalty Premium</div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Renewal members get preferential rates - the system rewards patience
                </p>
              </div>
            </div>

            <div className="exclusive-card p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">The Compound Effect</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional investors chase quarterly returns. Smart capital builds 24-month strategic positions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-steel-light/10 rounded-lg">
                  <div className="text-xl font-bold text-destructive mb-2">Traditional Approach</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quarterly performance anxiety</li>
                    <li>• Exit penalties and lock-ins</li>
                    <li>• No strategic time horizon</li>
                    <li>• Emotional decision making</li>
                  </ul>
                </div>
                <div className="p-4 bg-emerald/10 rounded-lg">
                  <div className="text-xl font-bold text-emerald mb-2">Wealth Blocks Method</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 24-month strategic horizon</li>
                    <li>• Mechanical rebalancing</li>
                    <li>• Compound-friendly structure</li>
                    <li>• AI removes emotions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Architecture;
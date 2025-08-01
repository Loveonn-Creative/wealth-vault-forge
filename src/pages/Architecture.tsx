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

        {/* Liquidity Engineering */}
        <section className="space-premium bg-steel-light/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                The Liquidity Engineering
              </h2>
              <p className="text-xl text-muted-foreground">
                Your 24-month horizon isn't a lock-in - it's a strategic advantage:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Phase 1 */}
              <div className="exclusive-card p-8">
                <h3 className="text-2xl font-bold text-emerald mb-4">Phase 1 (0-18 Months)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Capital deployed in high-conviction opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>AI enforces 15% exposure caps per fund</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>6-month systematic liquidation</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="exclusive-card p-8">
                <h3 className="text-2xl font-bold text-emerald mb-4">Phase 2 (19-24 Months)</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Systematic shift to liquid instruments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Prepares for your choice:</span>
                  </li>
                </ul>
                
                <div className="bg-steel-light/30 p-4 rounded-lg space-y-2">
                  <p className="text-emerald font-semibold">• Withdraw (Full liquidity)</p>
                  <p className="text-emerald font-semibold">• Auto-Renew (Next cycle at +1.5% preferential rate)</p>
                  <p className="text-emerald font-semibold">• Upsize (Seamless tier upgrade)</p>
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

            <div className="exclusive-card p-12">
              <h3 className="text-2xl font-bold text-emerald mb-8 text-center">What happens when markets turn:</h3>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* AI-Triggered Circuit Breakers */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">AI-Triggered Circuit Breakers</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Triggers at 0.5% distress signals (vs. 2% industry standard)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Automatic rotation to defensive positions</span>
                    </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Real-time exposure caps (no fund gets {'>'}15% of your capital)</span>
                  </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Circuit breakers that fire 3x faster than human fund managers</span>
                    </li>
                  </ul>
                </div>

                {/* Capital Memory System */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Capital Memory System</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>AI rebalances to recover losses 37% faster than manual funds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span>Your ₹10L here outperforms ₹15L in PMS during downturns</span>
                    </li>
                  </ul>
                  
                  <div className="bg-emerald/10 p-4 rounded-lg mt-6">
                    <p className="text-emerald font-semibold">Our AI Sentry System doesn't just allocate—it protects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 24-Month Capital Algorithm */}
        <section className="space-premium bg-steel-light/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                The 24-Month Capital Algorithm
              </h2>
              <p className="text-xl text-muted-foreground">
                How Wealth Blocks Turns Time Into Compound Leverage With AI
              </p>
            </div>

            <div className="space-y-12">
              {/* Phase 1: Intelligent Deployment */}
              <div className="exclusive-card p-8">
                <h3 className="text-2xl font-bold text-emerald mb-6">Phase 1: Intelligent Deployment (Days 0-90)</h3>
                <p className="text-lg text-muted-foreground mb-6">Your capital undergoes institutional-grade structuring:</p>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="bg-steel-light/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">60% Core Engine</h4>
                    <p className="text-sm text-muted-foreground">Private credit instruments (asset-backed, covenant-heavy) generating 8-12% via contractual cashflows</p>
                  </div>
                  
                  <div className="bg-steel-light/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">30% Alpha Layer</h4>
                    <p className="text-sm text-muted-foreground">Pre-IPO equity allocations with waterfall return structures (15-20% IRR)</p>
                  </div>
                  
                  <div className="bg-steel-light/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">10% Liquidity Mesh</h4>
                    <p className="text-sm text-muted-foreground">Automated treasury bills ladder + arbitrage sleeve (4-6% yield)</p>
                  </div>
                </div>
                
                <div className="bg-emerald/10 p-4 rounded-lg mt-6">
                  <p className="text-emerald font-semibold">Key Difference: Traditional investments park money. We activate it.</p>
                </div>
              </div>

              {/* Phase 2: Dynamic Harvest Cycle */}
              <div className="exclusive-card p-8">
                <h3 className="text-2xl font-bold text-emerald mb-6">Phase 2: Dynamic Harvest Cycle (Months 4-18)</h3>
                <p className="text-lg text-muted-foreground mb-6">Our AI executes what human fund managers can't:</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">→ Cashflow Stripping</h4>
                    <p className="text-muted-foreground mb-2">Extracts interest/dividends without selling assets (zero capital gains triggers)</p>
                    <p className="text-sm text-emerald">Example: ₹50L in venture debt yields ₹3.2L/year while preserving principal</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">→ Volatility Siphoning</h4>
                    <p className="text-muted-foreground">Redirects 22% of market downturn losses into defensive puts (paid from growth-layer profits)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">→ Reinvestment Triggers</h4>
                    <p className="text-muted-foreground">Compounds gains only when:</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Sharpe ratio {'>'}1.5</li>
                      <li>• Drawdown risk {'<'}3% next quarter</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3: Liquidity Orchestration */}
              <div className="exclusive-card p-8">
                <h3 className="text-2xl font-bold text-emerald mb-6">Phase 3: Liquidity Orchestration (Months 19-24)</h3>
                <p className="text-lg text-muted-foreground mb-6">Preparing your exit like private equity funds do:</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">→ Gradual Unwinding</h4>
                    <p className="text-muted-foreground">Sells 15% monthly from growth assets into:</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• AAA-rated commercial paper (5.2-6.1% yield)</li>
                      <li>• Pre-funded buyback agreements with partner banks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">→ Tax Engineering</h4>
                    <p className="text-muted-foreground">Tags every sale with applicable LTCG/STCG buckets</p>
                    <p className="text-muted-foreground">Auto-generates audit-ready holding period reports</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-emerald font-semibold mb-4">
                Real-World Output: ₹1Cr in Momentum Block = ₹13.2L earned while maintaining exit readiness vs. ₹6L in FDs.
              </p>
              
              <p className="text-2xl font-bold text-primary">
                We turn 24 months into a strategic advantage. This isn't parking money. It's programming wealth.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Architecture;
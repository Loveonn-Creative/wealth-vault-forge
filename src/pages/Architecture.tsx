import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Brain, Lock, TrendingUp } from 'lucide-react';

const Architecture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-title font-bold text-primary mb-6">
                THE DEFENSIVE ARCHITECTURE
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How Wealth Blocks Engineered India's First Zero-Default Private Capital Architecture, Since 2015
              </p>
              
              <div className="mt-12 p-6 bg-emerald/10 rounded-lg">
                <p className="text-lg font-semibold text-emerald">
                  You don't get 9 years of zero defaults by accident. You get it by rejecting 98% of what the 'smart money' calls opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 21-Parameter Fund Filter */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                The 21-Parameter Fund Filter
              </h2>
              <p className="text-xl text-muted-foreground">
                Every fund in our system survives three brutal filters:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Crisis-Proof DNA */}
              <div className="exclusive-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-emerald" size={24} />
                  <h3 className="text-xl font-bold text-foreground">Crisis-Proof DNA</h3>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Must have weathered 2018 NBFC crash + 2020 pandemic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>12-month liquidity stress tests at 2x normal withdrawal rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>We rejected 37 "high-return" funds last year for hidden single-point failures your banker wouldn't notice</span>
                  </li>
                </ul>
              </div>

              {/* Skin-in-the-Game Mandate */}
              <div className="exclusive-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-emerald" size={24} />
                  <h3 className="text-xl font-bold text-foreground">Skin-in-the-Game Mandate</h3>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Fund principals must invest minimum 15% personal wealth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Personal net worth audits every 6 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>No anonymous managers - only accountable partners</span>
                  </li>
                </ul>
              </div>

              {/* AI-Powered Liquidity Scans */}
              <div className="exclusive-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="text-emerald" size={24} />
                  <h3 className="text-xl font-bold text-foreground">AI-Powered Liquidity Scans</h3>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Our systems track real-time redemption capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Auto-flags funds showing early distress patterns (0.5% threshold)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                    <span>Prevents 89% of liquidity crunches before they occur</span>
                  </li>
                </ul>
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
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Tiers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-title font-bold text-primary mb-6">
                The Tiered System for Investors Who Reject Mediocrity
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wealth Blocks isn't a product—it's a private capital ecosystem engineered to balance performance with three distinct tiers.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Tiers */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16">
              
              {/* Prime Block */}
              <div className="exclusive-card p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-emerald mb-2">PRIME BLOCK</h2>
                      <p className="text-xl text-muted-foreground">₹15K-₹2L</p>
                      <p className="text-lg text-steel-dark mt-2">For those transitioning from FDs to real growth</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-4xl font-bold text-primary">8-12% Returns</div>
                      
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>AI-allocated across 3 institutional-grade private funds</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>8-12% returns with 24-month liquidity windows (compare to 5-7 year lock-ins in comparable PE funds)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>Your money grows smarter here in 2 years than it would in 5 elsewhere</span>
                        </li>
                      </ul>
                      
                      <div className="bg-steel-light/30 p-4 rounded-lg">
                        <p className="text-emerald font-semibold">Example: ₹10L here outperforms ₹1Cr in your bank account</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/10 to-steel-light/20 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Why Prime Block Works</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>• Institutional-grade diversification across verified private funds</li>
                      <li>• AI-powered allocation prevents concentration risk</li>
                      <li>• Liquidity engineering ensures 24-month exit readiness</li>
                      <li>• Entry-level access to elite investment strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Momentum Block */}
              <div className="exclusive-card p-12 border-emerald/30">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-emerald mb-2">MOMENTUM BLOCK</h2>
                      <p className="text-xl text-muted-foreground">₹2L-₹20L</p>
                      <p className="text-lg text-steel-dark mt-2">Where professionals convert salary into legacy</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-4xl font-bold text-primary">11-18% Returns</div>
                      
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>5-fund rotation with automatic drawdown protection</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>11-18% returns, quarterly rebalancing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>24-month full liquidity - same timeframe as most "safe" FDs but with 3x returns</span>
                        </li>
                      </ul>
                      
                      <div className="bg-steel-light/30 p-4 rounded-lg">
                        <p className="text-emerald font-semibold">What you'll realize in 24 months: This wasn't a lock-in period. It was a head start.</p>
                      </div>
                      
                      <div className="bg-emerald/10 p-4 rounded-lg">
                        <p className="text-steel-dark font-semibold">Secret weapon: "Capital memory" that recovers losses faster than public markets</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/10 to-steel-light/20 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Momentum Advantage</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>• Advanced 5-fund rotation strategy</li>
                      <li>• Quarterly rebalancing for optimal performance</li>
                      <li>• Automatic drawdown protection systems</li>
                      <li>• Capital memory technology for faster recovery</li>
                      <li>• Professional-grade portfolio management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legacy Block */}
              <div className="exclusive-card p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-emerald mb-2">LEGACY BLOCK</h2>
                      <p className="text-xl text-muted-foreground">₹20L+</p>
                      <p className="text-lg text-steel-dark mt-2">How families quietly compound generational wealth</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-4xl font-bold text-primary">15-23% Returns</div>
                      
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>Direct access to offshore-grade instruments</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>Multi-block strategy with aggressive compound layers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>Private onboarding only (invite + strategic call)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span>15-23% returns with flexible exits after 24 months (structured to avoid early liquidation penalties)</span>
                        </li>
                      </ul>
                      
                      <div className="bg-steel-light/30 p-4 rounded-lg">
                        <p className="text-emerald font-semibold">The elite don't think in "lock-ins"—they think in strategic horizons. 24 months is merely one cycle.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/10 to-steel-light/20 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Legacy Privileges</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>• Offshore-grade institutional instruments</li>
                      <li>• Multi-layered compounding strategies</li>
                      <li>• Exclusive private onboarding process</li>
                      <li>• Dedicated relationship management</li>
                      <li>• Flexible exit structures without penalties</li>
                      <li>• Access to ultra-high-net-worth opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="space-premium bg-steel-light/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-primary mb-6">
                The Brutal Math of Missed Opportunities
              </h2>
            </div>

            <div className="exclusive-card p-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 text-muted-foreground">Your Current Holding</th>
                    <th className="pb-4 text-muted-foreground">Your Returns</th>
                    <th className="pb-4 text-muted-foreground">Lock-in Period</th>
                    <th className="pb-4 text-emerald">Wealth Blocks Equivalent</th>
                    <th className="pb-4 text-emerald">Our Returns</th>
                    <th className="pb-4 text-emerald">Our Liquidity</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-border/50">
                    <td className="py-4">Fixed Deposits</td>
                    <td className="py-4 text-muted-foreground">4-6%</td>
                    <td className="py-4 text-muted-foreground">1-5 years</td>
                    <td className="py-4 font-semibold text-emerald">Prime Block</td>
                    <td className="py-4 font-semibold text-emerald">8-12%</td>
                    <td className="py-4 font-semibold text-emerald">24 months</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4">PMS Schemes</td>
                    <td className="py-4 text-muted-foreground">10-12%</td>
                    <td className="py-4 text-muted-foreground">1 year+</td>
                    <td className="py-4 font-semibold text-emerald">Momentum Block</td>
                    <td className="py-4 font-semibold text-emerald">11-18%</td>
                    <td className="py-4 font-semibold text-emerald">24 months</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4">AIFs</td>
                    <td className="py-4 text-muted-foreground">14-16%</td>
                    <td className="py-4 text-muted-foreground">3+ years</td>
                    <td className="py-4 font-semibold text-emerald">Legacy Block</td>
                    <td className="py-4 font-semibold text-emerald">15-23%</td>
                    <td className="py-4 font-semibold text-emerald">24 months</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4">Real Estate</td>
                    <td className="py-4 text-muted-foreground">7-9%</td>
                    <td className="py-4 text-muted-foreground">3-7 years</td>
                    <td className="py-4 font-semibold text-emerald">Legacy Block</td>
                    <td className="py-4 font-semibold text-emerald">15-23%</td>
                    <td className="py-4 font-semibold text-emerald">24 months</td>
                  </tr>
                  <tr>
                    <td className="py-4">Mutual Funds</td>
                    <td className="py-4 text-muted-foreground">9-11%</td>
                    <td className="py-4 text-muted-foreground">Exit loads</td>
                    <td className="py-4 font-semibold text-emerald">Momentum Block</td>
                    <td className="py-4 font-semibold text-emerald">11-18%</td>
                    <td className="py-4 font-semibold text-emerald">24 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-8">
                → Wealth Blocks delivers 2-3X returns of traditional instruments within the same or shorter timeframes.
              </p>
              
              <Link 
                to="/access"
                className="inline-flex items-center gap-2 bg-emerald text-emerald-foreground px-8 py-4 rounded-lg hover:bg-emerald/90 transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                Choose Your Tier →
              </Link>
            </div>
          </div>
        </section>

        {/* 24-Month Explanation */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-title font-bold text-primary mb-8">
                Why 24 Months Matters Less Than You Think
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
                <p>In traditional investing:</p>
                <ul className="text-left space-y-2 max-w-2xl mx-auto">
                  <li>• Private equity locks capital for 5-10 years</li>
                  <li>• Real estate ties up funds for 3-7 years</li>
                  <li>• Even "liquid" mutual funds have hidden exit loads</li>
                </ul>
                
                <p className="text-xl font-semibold text-foreground pt-6">
                  Wealth Blocks delivers institutional returns with transparent, predictable liquidity:
                </p>
                
                <ul className="text-left space-y-2 max-w-2xl mx-auto text-emerald">
                  <li>→ Exit after 24 months with no penalty</li>
                  <li>→ Earlier exits available (with scaled fees)</li>
                  <li>→ Your capital isn't stuck—it's strategically positioned</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tiers;
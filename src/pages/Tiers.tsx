import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Activity, Shield } from 'lucide-react';

const Tiers = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium bg-black">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-8">
                <Activity className="w-4 h-4 animate-pulse" />
                Investment Tiers Active
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Choose Your Wealth Architecture
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Three engineered tiers. Each optimized for different scales, built with institutional-grade standards.
              </p>
            </div>
          </div>
        </section>

        {/* Tier Cards - Mobile First */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="space-y-8 lg:space-y-16">
              
              {/* Prime Block */}
              <div className="dashboard-tile group bg-gray-900/50 border border-emerald/20 hover:border-emerald/40 p-6 lg:p-12 transition-all duration-700">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-emerald/10 rounded-lg">
                        <Shield className="w-6 h-6 text-emerald" />
                      </div>
                      <div className="live-indicator text-sm">
                        <Activity className="w-3 h-3" />
                        Active
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-2xl lg:text-3xl font-bold text-emerald mb-2">PRIME BLOCK</h2>
                      <p className="text-lg lg:text-xl text-gray-300">₹15K-₹2L</p>
                      <p className="text-base lg:text-lg text-gray-400 mt-2">FD to growth transition tier</p>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-emerald/10 rounded-lg">
                          <div className="text-lg lg:text-xl font-bold text-emerald">8-12%</div>
                          <div className="text-xs text-gray-400">Expected ROI</div>
                        </div>
                         <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                           <div className="text-lg lg:text-xl font-bold text-white">35%</div>
                           <div className="text-xs text-gray-400">Holding %</div>
                         </div>
                         <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                           <div className="text-lg lg:text-xl font-bold text-white">Low</div>
                           <div className="text-xs text-gray-400">Risk Level</div>
                         </div>
                        <div className="text-center p-3 bg-gold/10 rounded-lg">
                          <div className="text-lg lg:text-xl font-bold text-gold">24M</div>
                          <div className="text-xs text-gray-400">Lock-in</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span className="text-sm lg:text-base">AI-allocated across 3 institutional-grade private funds</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span className="text-sm lg:text-base">24-month strategic liquidity vs 5-7 year PE lock-ins</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                          <span className="text-sm lg:text-base">Smart money growth acceleration protocol</span>
                        </li>
                      </ul>
                      
                      <div className="bg-emerald/10 p-4 rounded-lg">
                        <p className="text-emerald font-semibold text-sm lg:text-base">₹1L here outperforms ₹5L in bank FDs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald/5 to-gray-800/50 p-6 lg:p-8 rounded-lg">
                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">Trust-Building CTAs</h3>
                    <div className="space-y-4">
                      <a href="/portfolio" className="block p-3 bg-emerald/10 rounded-lg hover:bg-emerald/20 transition-all">
                        <div className="text-emerald font-medium text-sm">See Past Performance</div>
                        <div className="text-gray-400 text-xs mt-1">View anonymous member results</div>
                      </a>
                      <a href="/architecture" className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all">
                        <div className="text-white font-medium text-sm">Compare with FDs</div>
                        <div className="text-gray-400 text-xs mt-1">Side-by-side analysis</div>
                      </a>
                    </div>
                    
                    <div className="mt-6 p-4 bg-emerald/5 rounded-lg">
                      <h4 className="text-white font-medium mb-3 text-sm">Prime Block Advantages</h4>
                      <ul className="space-y-2 text-xs text-gray-400">
                        <li>• Institutional diversification, retail access</li>
                        <li>• AI prevents concentration risk</li>
                        <li>• Engineered 24-month exit readiness</li>
                        <li>• Elite strategies, middle-class entry</li>
                      </ul>
                    </div>
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
                       <div className="space-y-4">
                         <div className="text-4xl font-bold text-primary">11-18% Returns</div>
                         
                         {/* Momentum Block Metrics */}
                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                           <div className="text-center p-3 bg-emerald/10 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-emerald">11-18%</div>
                             <div className="text-xs text-gray-400">Expected ROI</div>
                           </div>
                           <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-white">52%</div>
                             <div className="text-xs text-gray-400">Holding %</div>
                           </div>
                           <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-white">Med</div>
                             <div className="text-xs text-gray-400">Risk Level</div>
                           </div>
                           <div className="text-center p-3 bg-gold/10 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-gold">24M</div>
                             <div className="text-xs text-gray-400">Lock-in</div>
                           </div>
                         </div>
                       </div>
                      
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
                       <div className="space-y-4">
                         <div className="text-4xl font-bold text-primary">15-23% Returns</div>
                         
                         {/* Legacy Block Metrics */}
                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                           <div className="text-center p-3 bg-emerald/10 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-emerald">15-23%</div>
                             <div className="text-xs text-gray-400">Expected ROI</div>
                           </div>
                           <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-white">78%</div>
                             <div className="text-xs text-gray-400">Holding %</div>
                           </div>
                           <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-white">Elite</div>
                             <div className="text-xs text-gray-400">Risk Level</div>
                           </div>
                           <div className="text-center p-3 bg-gold/10 rounded-lg">
                             <div className="text-lg lg:text-xl font-bold text-gold">24M</div>
                             <div className="text-xs text-gray-400">Lock-in</div>
                           </div>
                         </div>
                       </div>
                      
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
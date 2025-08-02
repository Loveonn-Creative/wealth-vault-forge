import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TrendingUp, Activity, Brain, BarChart3, Shield, Zap } from 'lucide-react';

const Insights = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
         <section className="space-premium bg-black">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                 <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                 AI Intelligence Active
               </div>
               <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                 WHAT'S TRENDING AMONG
                 <br />
                 <span className="bg-gradient-to-r from-emerald via-gold to-emerald bg-clip-text text-transparent">
                   SMART INVESTORS
                 </span>
               </h1>
               <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                 Real-time AI insights into private capital movements, fund allocations, and emerging opportunities
               </p>
             </div>
           </div>
         </section>

        {/* Real-Time Dashboard */}
         <section className="space-premium bg-black">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             
             {/* Tier-Based Insights */}
             <div className="text-center mb-12">
               <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                 Insights by Investment Tier
               </h2>
               <p className="text-gray-400">What's working across Prime, Momentum, and Legacy blocks</p>
             </div>

             <div className="grid lg:grid-cols-3 gap-8 mb-16">
               {/* Prime Block Insights */}
               <div className="bg-gray-900/50 border border-emerald/20 rounded-lg p-6 hover:border-emerald/40 transition-all duration-300">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <Shield className="text-emerald" size={24} />
                     <h3 className="text-lg font-semibold text-white">Prime Block Activity</h3>
                   </div>
                   <div className="live-indicator text-xs">Live</div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="text-2xl font-bold text-emerald">₹15K-₹2L</div>
                   <p className="text-sm text-gray-400">
                     Conservative growth focus this week
                   </p>
                   
                   <div className="space-y-3">
                     <div className="p-3 bg-emerald/10 rounded-lg border border-emerald/20">
                       <div className="text-sm font-medium text-emerald">Hot: Credit Funds</div>
                       <div className="text-xs text-gray-400 mt-1">
                         47% allocation increase from retail investors
                       </div>
                     </div>
                     
                     <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Average Return</span>
                         <span className="text-emerald">9.2%</span>
                       </div>
                       <div className="w-full bg-gray-800 rounded-full h-2">
                         <div className="bg-emerald h-2 rounded-full w-[75%]"></div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Momentum Block Insights */}
               <div className="bg-gray-900/50 border border-emerald/20 rounded-lg p-6 hover:border-emerald/40 transition-all duration-300">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <TrendingUp className="text-emerald" size={24} />
                     <h3 className="text-lg font-semibold text-white">Momentum Block Activity</h3>
                   </div>
                   <div className="live-indicator text-xs">Live</div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="text-2xl font-bold text-emerald">₹2L-₹20L</div>
                   <p className="text-sm text-gray-400">
                     PE allocation spike detected
                   </p>
                   
                   <div className="space-y-3">
                     <div className="p-3 bg-gold/10 rounded-lg border border-gold/20">
                       <div className="text-sm font-medium text-gold">Alert: Rebalancing Due</div>
                       <div className="text-xs text-gray-400 mt-1">
                         AI recommends 15% shift to infrastructure
                       </div>
                     </div>
                     
                     <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Current Performance</span>
                         <span className="text-emerald">14.7%</span>
                       </div>
                       <div className="w-full bg-gray-800 rounded-full h-2">
                         <div className="bg-emerald h-2 rounded-full w-[90%]"></div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Legacy Block Insights */}
               <div className="bg-gray-900/50 border border-emerald/20 rounded-lg p-6 hover:border-emerald/40 transition-all duration-300">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <BarChart3 className="text-emerald" size={24} />
                     <h3 className="text-lg font-semibold text-white">Legacy Block Activity</h3>
                   </div>
                   <div className="live-indicator text-xs">Live</div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="text-2xl font-bold text-emerald">₹20L+</div>
                   <p className="text-sm text-gray-400">
                     Offshore opportunities opening
                   </p>
                   
                   <div className="space-y-3">
                     <div className="p-3 bg-emerald/10 rounded-lg border border-emerald/20">
                       <div className="text-sm font-medium text-emerald">Exclusive: Dubai Fund</div>
                       <div className="text-xs text-gray-400 mt-1">
                         Limited access starts Monday, 19% projected
                       </div>
                     </div>
                     
                     <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Elite Performance</span>
                         <span className="text-emerald">21.3%</span>
                       </div>
                       <div className="w-full bg-gray-800 rounded-full h-2">
                         <div className="bg-emerald h-2 rounded-full w-[95%]"></div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

         {/* Real-time Market Data */}
         <section className="space-premium bg-gray-900/30 border-t border-emerald/10">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                 <Brain className="w-4 h-4" />
                 Real-time Intelligence
               </div>
               <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                 What's Moving Private Capital
               </h2>
               <p className="text-xl text-gray-300">
                 AI analysis from 847 funds, updated every 6 hours
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
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TrendingUp, Shield, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="live-indicator mb-6">
                Portfolio Engine Active
              </div>
              <h1 className="text-title font-bold text-white mb-6">
                AI-Powered Portfolio Intelligence
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Real-time analytics, risk optimization, and performance tracking for private capital investments
              </p>
            </div>
          </div>
        </section>

        {/* AI-Powered Case Studies */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                AI-Powered Live Portfolio Cases
              </h2>
              <p className="text-base lg:text-xl text-gray-400">
                Real member performance with detailed ROI breakdowns
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Professional Case - Fixed Data */}
              <div className="dashboard-tile group hover:border-emerald/50 transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-emerald" size={20} />
                    <span className="text-emerald font-medium text-xs lg:text-sm">MOMENTUM BLOCK</span>
                  </div>
                  <div className="live-indicator text-xs">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-xl lg:text-2xl font-bold text-emerald">₹8.2L → ₹11.7L</div>
                    <div className="text-xs lg:text-sm text-gray-400 mt-1">18 months • 42% growth</div>
                  </div>
                  
                  {/* Detailed Performance */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-emerald font-bold text-sm">52%</div>
                      <div className="text-xs text-gray-400">Holding</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-emerald font-bold text-sm">2.1/10</div>
                      <div className="text-xs text-gray-400">Risk</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">AI Rebalancing</span>
                      <span className="text-emerald">6 times</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Drawdown Protection</span>
                      <span className="text-emerald">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Lock-in Period</span>
                      <span className="text-white">24 months</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-emerald/5 rounded-lg">
                    <div className="text-sm text-emerald font-medium">Professional • Mumbai</div>
                    <div className="text-xs text-gray-400 mt-1">
                      "Outperforming equity with zero stress"
                    </div>
                  </div>
                  
                  {/* Hover Action */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="/access" className="block text-center py-2 text-xs text-emerald hover:text-emerald-light">
                      Compare with other plans →
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Case - Fixed Data */}
              <div className="dashboard-tile group hover:border-emerald/50 transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="text-emerald" size={20} />
                    <span className="text-emerald font-medium text-xs lg:text-sm">LEGACY BLOCK</span>
                  </div>
                  <div className="live-indicator text-xs">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-xl lg:text-2xl font-bold text-emerald">₹45L → ₹67L</div>
                    <div className="text-xs lg:text-sm text-gray-400 mt-1">24 months • 49% growth</div>
                  </div>
                  
                  {/* Detailed Performance */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-emerald font-bold text-sm">78%</div>
                      <div className="text-xs text-gray-400">Holding</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-emerald font-bold text-sm">Opt</div>
                      <div className="text-xs text-gray-400">Risk</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Offshore Allocation</span>
                      <span className="text-emerald">23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Multi-block Strategy</span>
                      <span className="text-emerald">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Lock-in Period</span>
                      <span className="text-white">24 months</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-emerald/5 rounded-lg">
                    <div className="text-sm text-emerald font-medium">Founder • Bangalore</div>
                    <div className="text-xs text-gray-400 mt-1">
                      "Better than idle cash while building"
                    </div>
                  </div>
                  
                  {/* Hover Action */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="/access" className="block text-center py-2 text-xs text-emerald hover:text-emerald-light">
                      See past performance →
                    </a>
                  </div>
                </div>
              </div>

              {/* Family Office Case - Fixed Data */}
              <div className="dashboard-tile group hover:border-emerald/50 transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="text-emerald" size={20} />
                    <span className="text-emerald font-medium text-xs lg:text-sm">LEGACY BLOCK</span>
                  </div>
                  <div className="live-indicator text-xs">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-xl lg:text-2xl font-bold text-emerald">₹2.3Cr → ₹3.8Cr</div>
                    <div className="text-xs lg:text-sm text-gray-400 mt-1">30 months • 65% growth</div>
                  </div>
                  
                  {/* Detailed Performance */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-emerald font-bold text-sm">89%</div>
                      <div className="text-xs text-gray-400">Holding</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-emerald font-bold text-sm">Elite</div>
                      <div className="text-xs text-gray-400">Risk</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Compound Strategy</span>
                      <span className="text-emerald">23.1% CAGR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Private Onboarding</span>
                      <span className="text-emerald">Complete</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Lock-in Period</span>
                      <span className="text-white">24 months</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-emerald/5 rounded-lg">
                    <div className="text-sm text-emerald font-medium">Family Office • Delhi</div>
                    <div className="text-xs text-gray-400 mt-1">
                      "Institutional access, zero bureaucracy"
                    </div>
                  </div>
                  
                  {/* Hover Action */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="/insights" className="block text-center py-2 text-xs text-emerald hover:text-emerald-light">
                      Compare with other plans →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Section */}
            <div className="mt-12 lg:mt-16 text-center">
              <div className="dashboard-tile bg-gray-900/30 border border-emerald/10 p-6 lg:p-8 max-w-2xl mx-auto">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-4">Personal vs Overall Portfolio</h3>
                <p className="text-gray-400 text-sm lg:text-base mb-6">
                  Compare your performance against the entire Wealth Blocks ecosystem
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button className="px-4 py-2 bg-emerald/20 text-emerald rounded-lg text-sm">Personal View</button>
                  <button className="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-lg text-sm hover:bg-gray-700/50">Overall Portfolio</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Analytics Dashboard */}
        <section className="space-premium">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-white mb-6">
                Portfolio Intelligence Dashboard
              </h2>
              <p className="text-xl text-gray-400">
                Real-time AI analytics for verified members
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Analytics */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-white">Performance Analytics</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Real-time performance monitoring with AI-powered insights, risk metrics, and comparative benchmarking across all private capital positions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-emerald/10 rounded-lg text-center">
                      <div className="text-lg font-bold text-emerald">96.7%</div>
                      <div className="text-xs text-gray-400">Accuracy Rate</div>
                    </div>
                    <div className="p-3 bg-emerald/10 rounded-lg text-center">
                      <div className="text-lg font-bold text-emerald">24/7</div>
                      <div className="text-xs text-gray-400">Monitoring</div>
                    </div>
                  </div>
                  
                  <div className="live-indicator">
                    Analyzing 47 data streams
                  </div>
                </div>
              </div>

              {/* Risk Management */}
              <div className="dashboard-tile p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-emerald" size={28} />
                  <h3 className="text-xl font-bold text-white">AI Risk Engine</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Advanced scenario analysis, stress testing, and AI-powered portfolio optimization recommendations with real-time risk scoring.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Default prevention</span>
                      <span className="text-emerald font-medium">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Crisis simulation accuracy</span>
                      <span className="text-emerald font-medium">97.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Early warning triggers</span>
                      <span className="text-emerald font-medium">0.5% threshold</span>
                    </div>
                  </div>
                  
                  <div className="live-indicator">
                    Risk protocols active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access CTA */}
        <section className="space-premium bg-gradient-to-br from-emerald/5 to-black">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="dashboard-tile p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Portfolio Access Required
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Advanced portfolio management tools available exclusively to verified Wealth Blocks members
              </p>
              
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="live-indicator">AI engine active</div>
                <div className="text-sm text-gray-400">•</div>
                <div className="text-sm text-emerald font-medium">Real-time optimization</div>
              </div>
              
              <a 
                href="/access"
                className="inline-flex items-center gap-2 bg-emerald text-emerald-foreground px-8 py-4 rounded-lg hover:bg-emerald/90 transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                Apply for Portfolio Access →
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
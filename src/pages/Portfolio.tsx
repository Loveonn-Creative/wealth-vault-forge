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

        {/* Case Studies Grid */}
        <section className="space-premium bg-muted/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title font-bold text-white mb-6">
                Live Portfolio Cases
              </h2>
              <p className="text-xl text-gray-400">
                Anonymous performance data from verified members
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Professional Case */}
              <div className="dashboard-tile group hover:border-emerald/50 transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-emerald" size={20} />
                    <span className="text-emerald font-medium text-sm">MOMENTUM BLOCK</span>
                  </div>
                  <div className="live-indicator text-xs">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-2xl font-bold text-emerald">₹8.2L → ₹11.7L</div>
                    <div className="text-sm text-gray-400 mt-1">18 months • 42% growth</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Risk Score</span>
                      <span className="text-emerald">2.1/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">AI Rebalancing</span>
                      <span className="text-emerald">6 times</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Drawdown Protection</span>
                      <span className="text-emerald">Active</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-emerald/5 rounded-lg">
                    <div className="text-sm text-emerald font-medium">Professional • Mumbai</div>
                    <div className="text-xs text-gray-400 mt-1">
                      "Outperforming my equity portfolio with zero stress"
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Case */}
              <div className="dashboard-tile group hover:border-emerald/50 transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="text-emerald" size={20} />
                    <span className="text-emerald font-medium text-sm">LEGACY BLOCK</span>
                  </div>
                  <div className="live-indicator text-xs">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-2xl font-bold text-emerald">₹45L → ₹67L</div>
                    <div className="text-sm text-gray-400 mt-1">24 months • 49% growth</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Offshore Allocation</span>
                      <span className="text-emerald">23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Multi-block Strategy</span>
                      <span className="text-emerald">Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Tax Optimization</span>
                      <span className="text-emerald">12.3% saved</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-emerald/5 rounded-lg">
                    <div className="text-sm text-emerald font-medium">Startup Founder • Bangalore</div>
                    <div className="text-xs text-gray-400 mt-1">
                      "Better than keeping cash idle while building company"
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Office Case */}
              <div className="dashboard-tile group hover:border-emerald/50 transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="text-emerald" size={20} />
                    <span className="text-emerald font-medium text-sm">LEGACY BLOCK</span>
                  </div>
                  <div className="live-indicator text-xs">Live</div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-2xl font-bold text-emerald">₹2.3Cr → ₹3.8Cr</div>
                    <div className="text-sm text-gray-400 mt-1">30 months • 65% growth</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Compound Strategy</span>
                      <span className="text-emerald">23.1% CAGR</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Generational Lock</span>
                      <span className="text-emerald">Enabled</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Private Onboarding</span>
                      <span className="text-emerald">Complete</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-emerald/5 rounded-lg">
                    <div className="text-sm text-emerald font-medium">Family Office • Delhi</div>
                    <div className="text-xs text-gray-400 mt-1">
                      "Finally, private capital access that matches our scale"
                    </div>
                  </div>
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
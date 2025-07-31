import { useEffect } from 'react';
import { Activity, TrendingUp, Shield, Zap, BarChart3, Brain } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll reveal animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      {/* Hero Section - Instant Impact Design */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-steel blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald rounded-full animate-ping"></div>
        </div>

        {/* Real-time Data Flow Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent animate-pulse"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-steel/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center space-premium">
          {/* Ultra-Prominent Live Status */}
          <div className="reveal-fade mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald/15 border border-emerald/30 rounded-full text-emerald text-base font-bold backdrop-blur-sm">
              <div className="w-3 h-3 bg-emerald rounded-full animate-pulse shadow-emerald shadow-lg"></div>
              AI CAPITAL ENGINE LIVE • ₹847CR UNDER MANAGEMENT
            </div>
          </div>

          {/* Hero Content - Immediate Impact */}
          <div className="space-y-10">
            {/* Power Opening */}
            <div className="reveal-up reveal-stagger-1">
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6">
                WEALTH
                <br />
                <span className="bg-gradient-to-r from-emerald via-emerald-light to-steel-light bg-clip-text text-transparent">
                  BLOCKS™
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-emerald font-bold tracking-wide">
                PRIVATE CAPITAL • ENGINEERED RETURNS • AI-OPTIMIZED
              </div>
            </div>

            {/* Hook - First 3 Second Impact */}
            <div className="reveal-up reveal-stagger-2 max-w-3xl mx-auto">
              <p className="text-2xl lg:text-3xl text-white font-semibold leading-tight mb-6">
                STOP LOSING TO INFLATION
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                While you earn 6% in FDs, the select few compound at 15-23% in private capital markets.
              </p>
              <p className="text-lg text-emerald font-medium">
                This is your invitation to cross over.
              </p>
            </div>

            {/* Immediate Action CTA */}
            <div className="reveal-up reveal-stagger-3 pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a 
                  href="/access"
                  className="group px-12 py-6 bg-emerald text-black rounded-xl hover:bg-emerald/90 transition-all duration-300 wealth-hover font-black text-xl shadow-emerald/50 shadow-2xl"
                >
                  <span className="flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    APPLY NOW • LIMITED ACCESS
                  </span>
                </a>
                <div className="text-sm text-gray-400 text-center">
                  <div className="font-medium">97% rejection rate</div>
                  <div>Private capital requires verification</div>
                </div>
              </div>
            </div>

            {/* Live Performance Ticker */}
            <div className="reveal-up reveal-stagger-4 pt-8">
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald">15-23%</div>
                  <div className="text-sm text-gray-400">Annual Returns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald">₹15K</div>
                  <div className="text-sm text-gray-400">Min Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald">24M</div>
                  <div className="text-sm text-gray-400">Liquidity Window</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-fade">
          <div className="flex flex-col items-center space-y-3 text-emerald/80">
            <div className="w-px h-16 bg-gradient-to-b from-emerald via-emerald/50 to-transparent animate-pulse"></div>
            <p className="text-xs tracking-widest uppercase font-medium">DISCOVER MORE</p>
          </div>
        </div>
      </section>

      {/* Brief Platform Overview */}
      <section className="relative bg-black border-t border-emerald/10 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* AI Signal Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              AI-Driven Capital Architecture
            </div>
            <h2 className="text-title font-bold text-white mb-4">
              The Tiered System for Investors Who Reject Mediocrity
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three distinct performance tiers, each engineered to balance growth with intelligent risk management.
            </p>
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "PRIME BLOCK",
                range: "₹15K-₹2L",
                returns: "8-12%",
                icon: Shield,
                description: "For those transitioning from FDs to real growth",
                features: ["AI-allocated across 3 institutional-grade private funds", "24-month liquidity windows", "Smart money growth acceleration"]
              },
              {
                name: "MOMENTUM BLOCK", 
                range: "₹2L-₹20L",
                returns: "11-18%",
                icon: TrendingUp,
                description: "Where professionals convert salary into legacy",
                features: ["5-fund rotation with automatic drawdown protection", "Quarterly AI rebalancing", "Capital memory recovery system"]
              },
              {
                name: "LEGACY BLOCK",
                range: "₹20L+",
                returns: "15-23%", 
                icon: BarChart3,
                description: "How families quietly compound generational wealth",
                features: ["Direct access to offshore-grade instruments", "Multi-block compound strategies", "Private onboarding only"]
              }
            ].map((tier, index) => (
              <div key={tier.name} className="dashboard-tile group bg-gray-900/50 border border-emerald/20 hover:border-emerald/40 transition-all duration-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald/10 rounded-lg">
                    <tier.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div className="live-indicator">
                    <Activity className="w-3 h-3" />
                    Active
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-emerald font-semibold mb-2">{tier.range}</p>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{tier.returns}</span>
                  <span className="text-sm text-gray-400">Annual Returns</span>
                </div>
                
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Anchor */}
      <section className="relative bg-black border-t border-emerald/10 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-8">
            <Activity className="w-4 h-4 animate-pulse" />
            Live Performance Data
          </div>
          
          <h2 className="text-title font-bold text-white mb-6">
            Where India's Most Discerning Investors Quietly Grow Their Wealth
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            The top 9% of Indian portfolios don't chase markets—they're built in private financial architectures. 
            A select group compounds at 12-23% with institutional safeguards.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { metric: "12-23%", label: "Annual Returns", icon: TrendingUp },
              { metric: "Zero", label: "Defaults Since 2015", icon: Shield },
              { metric: "24 Months", label: "Strategic Liquidity", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="dashboard-tile bg-gray-900/30 border border-emerald/10">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-emerald" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified CTA */}
      <section className="relative bg-black border-t border-emerald/10 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-8">
            <Brain className="w-4 h-4" />
            AI Selection Protocol
          </div>
          
          <h2 className="text-title font-bold text-white mb-6">
            The Selection Process
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            This isn't an investment. It's an upgrade path for your entire wealth strategy.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "01", title: "Expression of Intent", desc: "3-minute encrypted submission" },
              { step: "02", title: "Verification Layer", desc: "Human-conducted KYC + strategy alignment" },
              { step: "03", title: "Portfolio Mirror", desc: "Live simulation using actual fund data" },
              { step: "04", title: "Execution Autonomy", desc: "Invest/decline with zero friction" }
            ].map((phase, index) => (
              <div key={index} className="dashboard-tile bg-gray-900/30 border border-emerald/10 hover:border-emerald/30">
                <div className="text-emerald font-bold text-sm mb-2">GATE {phase.step}</div>
                <div className="text-white font-semibold mb-2">{phase.title}</div>
                <div className="text-gray-400 text-sm">{phase.desc}</div>
              </div>
            ))}
          </div>
          
          <a 
            href="/access"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald text-black rounded-lg hover:bg-emerald/90 transition-all duration-500 wealth-hover font-semibold"
          >
            <Zap className="w-5 h-5" />
            Start Your Verification
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

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
      
        {/* Hero Section - 100x Better Impact */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          {/* AI Data Flow Background */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-emerald rounded-full animate-ping"></div>
          </div>

          {/* Live ROI Data Streams */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/40 to-transparent animate-pulse"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-emerald/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 lg:px-8 text-center">
            {/* Real-Time Status - Maximum Impact */}
            <div className="reveal-fade mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-3 px-4 py-3 lg:px-6 lg:py-3 bg-emerald/20 border border-emerald/40 rounded-full text-emerald text-sm lg:text-base font-bold backdrop-blur-md">
                <div className="w-3 h-3 bg-emerald rounded-full animate-pulse shadow-emerald shadow-lg"></div>
                <span className="hidden sm:inline">AI CAPITAL ENGINE LIVE</span>
                <span className="sm:hidden">AI ENGINE LIVE</span>
                <span className="text-xs lg:text-sm">• ₹847CR UNDER MANAGEMENT</span>
              </div>
            </div>

            {/* Power Tagline - First 3 Seconds */}
            <div className="reveal-up reveal-stagger-1 space-y-6 lg:space-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
                <span className="block">THE PRIVATE</span>
                <span className="block bg-gradient-to-r from-emerald via-gold to-emerald bg-clip-text text-transparent">
                  WEALTH ENGINE
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-emerald font-medium mt-4">
                  BUILT FOR THE MIDDLE CLASS
                </span>
              </h1>
            </div>

            {/* Immediate Hook */}
            <div className="reveal-up reveal-stagger-2 max-w-4xl mx-auto mt-8 lg:mt-12">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-tight mb-4 lg:mb-6">
                STOP ACCEPTING 6% WHILE THE ELITE EARN 23%
              </p>
              <p className="text-base lg:text-xl text-gray-300 leading-relaxed mb-4">
                Private capital markets generate 15-23% returns. Until now, they required ₹1Cr+ entry.
              </p>
              <p className="text-base lg:text-lg text-emerald font-bold">
                We engineered access starting at ₹15K.
              </p>
            </div>

            {/* Dual CTA */}
            <div className="reveal-up reveal-stagger-3 pt-6 lg:pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 mb-6 lg:mb-8">
                <a 
                  href="/access"
                  className="w-full sm:w-auto group px-8 lg:px-12 py-4 lg:py-6 bg-emerald text-black rounded-xl hover:bg-emerald/90 transition-all duration-300 wealth-hover font-black text-lg lg:text-xl shadow-emerald/50 shadow-2xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                    START WITH ₹10K
                  </span>
                </a>
                <a 
                  href="/portfolio"
                  className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-6 border-2 border-emerald/50 text-emerald rounded-xl hover:bg-emerald/10 transition-all duration-300 font-semibold text-lg lg:text-xl"
                >
                  EXPLORE PORTFOLIO CASES
                </a>
              </div>
              
              <div className="text-xs lg:text-sm text-gray-400 text-center max-w-md mx-auto">
                <div className="font-medium">97% rejection rate • Private capital requires verification</div>
              </div>
            </div>

            {/* Live Performance Mini-Dashboard */}
            <div className="reveal-up reveal-stagger-4 pt-8 lg:pt-12">
              <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto">
                <div className="text-center p-3 lg:p-4 bg-emerald/10 rounded-lg border border-emerald/20">
                  <div className="text-lg lg:text-2xl font-bold text-emerald">15-23%</div>
                  <div className="text-xs lg:text-sm text-gray-400">Annual Returns</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-gold/10 rounded-lg border border-gold/20">
                  <div className="text-lg lg:text-2xl font-bold text-gold">₹15K</div>
                  <div className="text-xs lg:text-sm text-gray-400">Min Investment</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-emerald/10 rounded-lg border border-emerald/20">
                  <div className="text-lg lg:text-2xl font-bold text-emerald">24M</div>
                  <div className="text-xs lg:text-sm text-gray-400">Liquidity Window</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 reveal-fade">
            <div className="flex flex-col items-center space-y-2 lg:space-y-3 text-emerald/80">
              <div className="w-px h-12 lg:h-16 bg-gradient-to-b from-emerald via-emerald/50 to-transparent animate-pulse"></div>
              <p className="text-[10px] lg:text-xs tracking-widest uppercase font-medium">DISCOVER</p>
            </div>
          </div>
        </section>

        {/* What's Inside Preview */}
        <section className="relative bg-black border-t border-emerald/10 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI-Driven Capital Architecture
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                What's Inside: Investment Tiers
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg">
                Three engineered performance tiers. Each optimized for different scales, same elite standards.
              </p>
            </div>

            {/* Mobile-First Tier Cards */}
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  name: "PRIME BLOCK",
                  range: "₹15K-₹2L",
                  returns: "8-12%",
                  holdingPercent: "35%",
                  riskLevel: "Low",
                  lockIn: "24 months",
                  icon: Shield,
                  description: "FD to growth transition",
                  highlights: ["3 institutional funds", "AI allocation", "Zero stress entry"]
                },
                {
                  name: "MOMENTUM BLOCK", 
                  range: "₹2L-₹20L",
                  returns: "11-18%",
                  holdingPercent: "52%",
                  riskLevel: "Medium",
                  lockIn: "24 months",
                  icon: TrendingUp,
                  description: "Salary to legacy converter",
                  highlights: ["5-fund rotation", "Quarterly rebalancing", "Drawdown protection"]
                },
                {
                  name: "LEGACY BLOCK",
                  range: "₹20L+",
                  returns: "15-23%",
                  holdingPercent: "78%",
                  riskLevel: "Optimized",
                  lockIn: "24 months",
                  icon: BarChart3,
                  description: "Generational wealth engine",
                  highlights: ["Offshore access", "Multi-block strategy", "Private onboarding"]
                }
              ].map((tier, index) => (
                <div key={tier.name} className="dashboard-tile group bg-gray-900/50 border border-emerald/20 hover:border-emerald/40 transition-all duration-700 cursor-pointer">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald/10 rounded-lg">
                        <tier.icon className="w-5 h-5 text-emerald" />
                      </div>
                      <div className="live-indicator text-xs">
                        <Activity className="w-3 h-3" />
                        Live
                      </div>
                    </div>
                    <div className="text-xs text-emerald font-bold">{tier.holdingPercent} HOLDING</div>
                  </div>
                  
                  {/* Title & Range */}
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-emerald font-semibold mb-2">{tier.range}</p>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  
                  {/* Performance */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-emerald/10 rounded">
                      <div className="text-lg font-bold text-emerald">{tier.returns}</div>
                      <div className="text-xs text-gray-400">Expected ROI</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-lg font-bold text-white">{tier.riskLevel}</div>
                      <div className="text-xs text-gray-400">Risk Level</div>
                    </div>
                  </div>
                  
                  {/* Lock-in */}
                  <div className="text-center p-2 bg-gold/10 rounded mb-4">
                    <div className="text-sm font-bold text-gold">{tier.lockIn} strategic horizon</div>
                  </div>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {tier.highlights.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover CTA */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="/tiers" className="text-xs text-emerald hover:text-emerald-light font-medium">
                      See past performance →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="text-center mt-8 lg:mt-12">
              <a 
                href="/tiers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald/10 border border-emerald/30 rounded-lg text-emerald hover:bg-emerald/20 transition-all duration-300 text-sm font-medium"
              >
                Compare all tiers
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Trust & Testimonials */}
        <section className="relative bg-black border-t border-emerald/10 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            {/* Trust Header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                <Activity className="w-4 h-4 animate-pulse" />
                Live Performance Data
              </div>
              
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                Elite Capital, Middle-Class Access
              </h2>
              
              <p className="text-base lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                The top 3% of Indian investors operate in private capital. We engineered the bridge.
              </p>
            </div>
            
            {/* Trust Metrics */}
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 mb-12 lg:mb-16">
              {[
                { metric: "15-23%", label: "Returns", icon: TrendingUp },
                { metric: "Zero", label: "Defaults", icon: Shield },
                { metric: "₹847Cr", label: "Under Mgmt", icon: BarChart3 }
              ].map((stat, index) => (
                <div key={index} className="dashboard-tile bg-gray-900/30 border border-emerald/10 p-4 lg:p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-emerald" />
                  </div>
                  <div className="text-lg lg:text-2xl font-bold text-white mb-1">{stat.metric}</div>
                  <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Raw Testimonials */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="dashboard-tile bg-gray-900/30 border border-emerald/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald font-bold text-sm">AD</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Startup Founder</div>
                    <div className="text-gray-400 text-xs">Momentum Block • 18 months</div>
                  </div>
                  <div className="ml-auto live-indicator text-xs">Live</div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "My ₹8L is outperforming the ₹25L I have in mutual funds. Zero stress, AI handles everything."
                </p>
                <div className="mt-4 text-emerald text-xs font-medium">+42% growth</div>
              </div>

              <div className="dashboard-tile bg-gray-900/30 border border-emerald/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">RK</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Family Office</div>
                    <div className="text-gray-400 text-xs">Legacy Block • 24 months</div>
                  </div>
                  <div className="ml-auto live-indicator text-xs">Live</div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Finally, institutional access without the bureaucracy. Returns speak louder than promises."
                </p>
                <div className="mt-4 text-emerald text-xs font-medium">+65% growth</div>
              </div>
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

import { useEffect } from 'react';
import { Activity, TrendingUp, Shield, Zap, BarChart3, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileEngagementHero from '@/components/MobileEngagementHero';

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Mobile-First Engagement Hero */}
      <MobileEngagementHero />

        {/* Mobile-Optimized Investment Tiers */}
        <section className="relative bg-gradient-to-b from-background to-muted/10 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16 reveal-fade">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI-Driven Capital Architecture
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Investment Tiers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
                <div key={tier.name} className={`exclusive-card wealth-hover group cursor-pointer reveal-up reveal-stagger-${index + 1}`}>
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
                  <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-emerald font-semibold mb-2">{tier.range}</p>
                  <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                  
                  {/* Performance */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-emerald/10 rounded">
                      <div className="text-lg font-bold text-emerald">{tier.returns}</div>
                      <div className="text-xs text-muted-foreground">Expected ROI</div>
                    </div>
                    <div className="text-center p-2 bg-muted/30 rounded">
                      <div className="text-lg font-bold text-foreground">{tier.riskLevel}</div>
                      <div className="text-xs text-muted-foreground">Risk Level</div>
                    </div>
                  </div>
                  
                  {/* Lock-in */}
                  <div className="text-center p-2 bg-gold/10 rounded mb-4">
                    <div className="text-sm font-bold text-gold">{tier.lockIn} strategic horizon</div>
                  </div>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {tier.highlights.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover CTA */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/tiers" className="text-xs text-emerald hover:text-emerald/80 font-medium">
                      See past performance →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="text-center mt-8 lg:mt-12">
              <Link 
                to="/tiers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald/10 border border-emerald/30 rounded-lg text-emerald hover:bg-emerald/20 transition-all duration-300 text-sm font-medium"
              >
                Compare all tiers
                <TrendingUp className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trust & Testimonials */}
        <section className="relative bg-gradient-to-b from-muted/10 to-background py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            {/* Trust Header */}
            <div className="text-center mb-12 lg:mb-16 reveal-fade">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-6">
                <Activity className="w-4 h-4 animate-pulse" />
                Live Performance Data
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Elite Capital, Middle-Class Access
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The top 3% of Indian investors operate in private capital. We engineered the bridge.
              </p>
            </div>
            
            {/* Trust Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
              {[
                { metric: "15-23%", label: "Returns", icon: TrendingUp },
                { metric: "Zero", label: "Defaults", icon: Shield },
                { metric: "₹1B Target", label: "By 2026/27", icon: BarChart3 }
              ].map((stat, index) => (
                <div key={index} className={`exclusive-card wealth-hover p-6 text-center reveal-up reveal-stagger-${index + 1}`}>
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-emerald" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="exclusive-card wealth-hover p-6 reveal-up reveal-stagger-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald font-bold text-sm">AD</span>
                  </div>
                  <div>
                    <div className="text-foreground font-medium text-sm">Startup Founder</div>
                    <div className="text-muted-foreground text-xs">Momentum Block • 18 months</div>
                  </div>
                  <div className="ml-auto live-indicator text-xs">Live</div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "My ₹8L is outperforming the ₹25L I have in mutual funds. Zero stress, AI handles everything."
                </p>
                <div className="mt-4 text-emerald text-xs font-medium">+42% growth</div>
              </div>

              <div className="exclusive-card wealth-hover p-6 reveal-up reveal-stagger-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">RK</span>
                  </div>
                  <div>
                    <div className="text-foreground font-medium text-sm">Family Office</div>
                    <div className="text-muted-foreground text-xs">Legacy Block • 24 months</div>
                  </div>
                  <div className="ml-auto live-indicator text-xs">Live</div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
          
          <Link 
            to="/access"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald text-black rounded-lg hover:bg-emerald/90 transition-all duration-500 wealth-hover font-semibold"
          >
            <Zap className="w-5 h-5" />
            Start Your Verification
          </Link>
        </div>
      </section>

      {/* Auth CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Already a Member?
          </h2>
          <p className="text-gray-400 mb-6">
            Access your personalized wealth dashboard
          </p>
          <Link 
            to="/auth" 
            className="inline-flex items-center gap-2 bg-emerald text-black px-6 py-3 rounded-lg hover:bg-emerald/90 transition-colors font-semibold"
          >
            Sign In to Dashboard →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

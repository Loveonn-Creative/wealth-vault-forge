import { Lock, TrendingUp, Crown, ArrowRight } from 'lucide-react';

const TierBlocks = () => {
  const tiers = [
    {
      name: 'Foundation',
      icon: Lock,
      description: 'Selective entry point for verified capital deployment',
      minimumInvestment: '₹50L+',
      features: [
        'AI-driven market intelligence',
        'Curated opportunity pipeline',
        'Risk-adjusted portfolio construction',
        'Quarterly performance reviews'
      ],
      exclusivity: 'Limited to 100 members',
      returns: '18-22% Target IRR'
    },
    {
      name: 'Momentum',
      icon: TrendingUp,
      description: 'Accelerated wealth engineering for committed capital',
      minimumInvestment: '₹2Cr+',
      features: [
        'Advanced algorithmic strategies',
        'Direct private market access',
        'Real-time performance optimization',
        'Dedicated relationship management'
      ],
      exclusivity: 'By invitation only',
      returns: '24-28% Target IRR',
      featured: true
    },
    {
      name: 'Legacy',
      icon: Crown,
      description: 'Institutional-grade infrastructure for generational wealth',
      minimumInvestment: '₹10Cr+',
      features: [
        'Bespoke investment architecture',
        'Direct co-investment opportunities',
        'Family office integration',
        'Global market orchestration'
      ],
      exclusivity: 'Ultra-selective access',
      returns: '30%+ Target IRR'
    }
  ];

  return (
    <section id="tiers" className="space-exclusive bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="reveal-fade">
            <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
              Investment Tiers
            </p>
          </div>
          <div className="reveal-up">
            <h2 className="text-title font-bold text-primary">
              Engineered for exceptional access
            </h2>
          </div>
        </div>

        {/* Tier Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`tier-block reveal-up reveal-stagger-${index + 1} ${
                tier.featured ? 'ring-2 ring-emerald/20 relative' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 bg-emerald text-emerald-foreground text-xs font-medium rounded-full">
                    Most Selected
                  </div>
                </div>
              )}

              {/* Tier Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-steel-light/50 rounded-lg">
                    <tier.icon size={24} className="text-emerald" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{tier.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Minimum</p>
                  <p className="font-bold text-emerald">{tier.minimumInvestment}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {tier.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Performance & Exclusivity */}
              <div className="border-t border-border/50 pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expected Returns</span>
                  <span className="font-semibold text-emerald">{tier.returns}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Access</span>
                  <span className="text-xs bg-steel-light/50 px-2 py-1 rounded text-steel-dark">
                    {tier.exclusivity}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="w-full group py-3 text-primary hover:text-emerald transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Request Access</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TierBlocks;
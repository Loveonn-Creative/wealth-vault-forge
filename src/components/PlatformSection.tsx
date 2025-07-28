import { Brain, Target, Zap, Shield, TrendingUp, Database } from 'lucide-react';

const PlatformSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI-Driven Intelligence',
      description: 'Advanced machine learning algorithms analyze market patterns, risk factors, and opportunity signals in real-time.',
      features: ['Predictive analytics', 'Risk modeling', 'Pattern recognition']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Proprietary algorithms identify high-conviction opportunities with superior risk-adjusted return profiles.',
      features: ['Opportunity scoring', 'Due diligence automation', 'Portfolio optimization']
    },
    {
      icon: Zap,
      title: 'Real-Time Execution',
      description: 'Instant market access and rapid deployment capabilities ensure optimal entry and exit timing.',
      features: ['Automated execution', 'Market monitoring', 'Performance tracking']
    }
  ];

  const dataPoints = [
    { metric: '500+', label: 'Data Sources', description: 'Real-time market intelligence' },
    { metric: '24/7', label: 'Monitoring', description: 'Continuous opportunity scanning' },
    { metric: '<2s', label: 'Response Time', description: 'Lightning-fast execution' },
    { metric: '99.9%', label: 'Uptime', description: 'Enterprise-grade reliability' }
  ];

  return (
    <section id="platform" className="space-exclusive bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="reveal-fade">
            <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
              Intelligence Engine
            </p>
          </div>
          <div className="reveal-up">
            <h2 className="text-title font-bold text-primary">
              Silent wealth engine
            </h2>
          </div>
          <div className="reveal-up reveal-stagger-1 max-w-3xl mx-auto">
            <p className="text-subtitle text-muted-foreground leading-relaxed">
              Our proprietary AI infrastructure processes vast amounts of market data, 
              identifying patterns invisible to traditional analysis and executing with precision.
            </p>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div key={capability.title} className={`exclusive-card p-8 wealth-hover reveal-up reveal-stagger-${index + 1}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-muted rounded-lg">
                    <capability.icon size={24} className="text-emerald" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{capability.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
                
                <div className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Infrastructure */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual representation */}
          <div className="reveal-up reveal-stagger-2">
            <div className="relative">
              <div className="exclusive-card p-12">
                <div className="text-center space-y-6">
                  <div className="relative w-40 h-40 mx-auto">
                    {/* Central AI core */}
                    <div className="absolute inset-8 bg-emerald rounded-full flex items-center justify-center">
                      <Database size={32} className="text-emerald-foreground" />
                    </div>
                    {/* Orbiting data points */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-steel-dark rounded-full transform -translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-steel-dark rounded-full transform -translate-x-1/2"></div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                      <div className="absolute left-0 top-1/2 w-2 h-2 bg-emerald-muted rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-emerald-muted rounded-full transform -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Neural Market Intelligence
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Processing market signals at unprecedented scale and speed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance metrics */}
          <div className="space-y-6 reveal-up reveal-stagger-3">
            <h3 className="text-xl font-bold text-primary mb-8">
              Infrastructure Performance
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {dataPoints.map((point, index) => (
                <div key={point.label} className="space-y-2">
                  <div className="text-2xl font-bold text-emerald">{point.metric}</div>
                  <div className="text-sm font-medium text-primary">{point.label}</div>
                  <div className="text-xs text-muted-foreground">{point.description}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-steel-light/30 rounded-lg border border-emerald/20">
              <div className="flex items-center gap-3 mb-3">
                <Shield size={20} className="text-emerald" />
                <h4 className="font-semibold text-primary">Security & Compliance</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bank-grade encryption, multi-layer security protocols, and full regulatory 
                compliance ensure your capital is protected at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-20 reveal-up reveal-stagger-3">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 text-emerald">
              <TrendingUp size={20} />
              <span className="font-medium">Consistent Alpha Generation</span>
            </div>
            <p className="text-muted-foreground">
              Our AI-driven approach has consistently outperformed traditional investment strategies, 
              delivering superior risk-adjusted returns across diverse market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
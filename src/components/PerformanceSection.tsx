import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

const PerformanceSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'Portfolio IRR',
      value: '27.3%',
      period: '24-month average',
      trend: '+4.2%'
    },
    {
      icon: BarChart3,
      label: 'Capital Deployed',
      value: '₹847Cr',
      period: 'Across 34 opportunities',
      trend: '+12.8%'
    },
    {
      icon: PieChart,
      label: 'Success Rate',
      value: '94.1%',
      period: 'Target achievement',
      trend: '+2.3%'
    },
    {
      icon: Activity,
      label: 'Alpha Generation',
      value: '11.7%',
      period: 'Above market benchmark',
      trend: '+1.9%'
    }
  ];

  const sectors = [
    { name: 'Deep Tech', allocation: 28, returns: '31.2%' },
    { name: 'Healthcare Innovation', allocation: 22, returns: '28.7%' },
    { name: 'Financial Infrastructure', allocation: 18, returns: '25.1%' },
    { name: 'Climate Solutions', allocation: 16, returns: '29.8%' },
    { name: 'Data Intelligence', allocation: 16, returns: '33.4%' }
  ];

  return (
    <section id="performance" className="space-exclusive bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="reveal-fade">
            <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
              Performance Intelligence
            </p>
          </div>
          <div className="reveal-up">
            <h2 className="text-title font-bold text-primary">
              Engineered for consistent alpha
            </h2>
          </div>
          <div className="reveal-up reveal-stagger-1 max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Our AI-driven investment engine has consistently delivered superior risk-adjusted returns 
              across market cycles, creating sustainable wealth for our members.
            </p>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`exclusive-card p-6 reveal-up reveal-stagger-${index + 1}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-emerald-muted rounded-lg">
                  <metric.icon size={20} className="text-emerald" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald font-medium">{metric.trend}</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-primary">{metric.value}</h3>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-xs text-muted-foreground">{metric.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sector Allocation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Allocation Breakdown */}
          <div className="reveal-up reveal-stagger-2">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary mb-6">
                Strategic Sector Allocation
              </h3>
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={sector.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary">{sector.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-emerald font-medium">{sector.returns}</span>
                        <span className="text-xs text-muted-foreground">{sector.allocation}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-steel-light rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald to-emerald-muted h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${sector.allocation * 3.5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Visualization */}
          <div className="reveal-up reveal-stagger-3">
            <div className="exclusive-card p-8">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-primary">
                  Risk-Adjusted Performance
                </h4>
                <div className="relative w-48 h-48 mx-auto">
                  {/* Simplified performance visualization */}
                  <div className="absolute inset-0 rounded-full border-8 border-steel-light"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-emerald border-r-emerald transform rotate-45"></div>
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-emerald/10 to-steel-light/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald">27.3%</div>
                      <div className="text-xs text-muted-foreground">Avg. IRR</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Consistent outperformance across all market conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal-up reveal-stagger-3">
          <button className="px-8 py-4 bg-emerald text-emerald-foreground rounded-lg hover:bg-emerald/90 transition-all duration-300 wealth-hover">
            Access Detailed Performance Reports
          </button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
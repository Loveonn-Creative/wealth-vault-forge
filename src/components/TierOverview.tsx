import { Link } from 'react-router-dom';

const TierOverview = () => {
  return (
    <section className="space-premium bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-title font-bold text-primary mb-6">
            The Tiered System for Investors Who Reject Mediocrity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to <span className="text-emerald font-semibold">Wealth Blocks™</span> — Where India's private investors place their capital in intelligent, performance-tuned blocks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Prime Block */}
          <div className="tier-block">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-emerald mb-2">PRIME BLOCK</h3>
              <p className="text-lg text-muted-foreground">₹15K-₹2L</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="text-3xl font-bold text-primary">8-12%</div>
              <p className="text-muted-foreground">For those transitioning from FDs to real growth</p>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AI-allocated across 3 institutional-grade private funds</li>
                <li>• 24-month liquidity windows</li>
                <li>• Your money grows smarter here in 2 years than 5 elsewhere</li>
              </ul>
            </div>
          </div>

          {/* Momentum Block */}
          <div className="tier-block border-emerald/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-emerald mb-2">MOMENTUM BLOCK</h3>
              <p className="text-lg text-muted-foreground">₹2L-₹20L</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="text-3xl font-bold text-primary">11-18%</div>
              <p className="text-muted-foreground">Where professionals convert salary into legacy</p>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 5-fund rotation with automatic drawdown protection</li>
                <li>• Quarterly rebalancing</li>
                <li>• "Capital memory" recovers losses faster than public markets</li>
              </ul>
            </div>
          </div>

          {/* Legacy Block */}
          <div className="tier-block">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-emerald mb-2">LEGACY BLOCK</h3>
              <p className="text-lg text-muted-foreground">₹20L+</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="text-3xl font-bold text-primary">15-23%</div>
              <p className="text-muted-foreground">How families quietly compound generational wealth</p>
              
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Direct access to offshore-grade instruments</li>
                <li>• Multi-block strategy with aggressive compound layers</li>
                <li>• Private onboarding only (invite + strategic call)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/tiers"
            className="inline-flex items-center gap-2 bg-emerald text-emerald-foreground px-8 py-4 rounded-lg hover:bg-emerald/90 transition-all duration-300 hover:scale-105 text-lg font-semibold"
          >
            Explore Investment Tiers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TierOverview;
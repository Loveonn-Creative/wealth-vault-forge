import { Link } from 'react-router-dom';

const SimplifiedCTA = () => {
  return (
    <section className="space-premium bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-title font-bold text-primary mb-8">
            Engineered Access. Not Everyone Gets In.
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="exclusive-card p-6">
              <div className="text-emerald font-bold mb-2">Gate 1</div>
              <h3 className="font-semibold text-foreground mb-2">Expression of Intent</h3>
              <p className="text-sm text-muted-foreground">3-minute encrypted submission</p>
            </div>
            
            <div className="exclusive-card p-6">
              <div className="text-emerald font-bold mb-2">Gate 2</div>
              <h3 className="font-semibold text-foreground mb-2">Verification Layer</h3>
              <p className="text-sm text-muted-foreground">Human-conducted KYC + strategy alignment</p>
            </div>
            
            <div className="exclusive-card p-6">
              <div className="text-emerald font-bold mb-2">Gate 3</div>
              <h3 className="font-semibold text-foreground mb-2">Portfolio Mirror</h3>
              <p className="text-sm text-muted-foreground">Live simulation using actual fund data</p>
            </div>
            
            <div className="exclusive-card p-6">
              <div className="text-emerald font-bold mb-2">Gate 4</div>
              <h3 className="font-semibold text-foreground mb-2">Execution Autonomy</h3>
              <p className="text-sm text-muted-foreground">Invest/decline with zero friction</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            Every investor is mapped to risk-grade funds. No public offers. Zero ad-based onboarding.
          </p>
          
          <Link 
            to="/access"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-lg font-semibold shadow-[var(--shadow-exclusive)]"
          >
            Start Verification →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedCTA;
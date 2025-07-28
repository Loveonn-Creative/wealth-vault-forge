import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete guides and documentation for Wealth Blocks platform
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Access Protocol</h2>
              <p className="text-muted-foreground leading-relaxed">
                Step-by-step guide to accessing the platform, completing verification, 
                and beginning your private capital investment journey.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Investment Tiers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Detailed documentation on Foundation, Momentum, and Legacy tiers, 
                including minimum investments, expected returns, and risk profiles.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance Framework</h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive overview of our SEBI and RBI compliance measures, 
                investor protection protocols, and regulatory adherence.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Platform Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Technical documentation on our security infrastructure, data protection, 
                and privacy measures for all member interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
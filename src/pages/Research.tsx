import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Market Intelligence</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Proprietary research and insights for private capital opportunities
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Private Market Analysis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our AI-powered research engine continuously analyzes private market trends, 
                regulatory changes, and opportunity landscapes to identify high-performance 
                investment vehicles before they become mainstream.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Risk Intelligence</h2>
              <p className="text-muted-foreground leading-relaxed">
                Advanced risk modeling and scenario analysis for private capital instruments, 
                providing transparency and confidence in every investment decision.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Exclusive Reports</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quarterly deep-dive reports on emerging private capital opportunities, 
                available exclusively to verified Wealth Blocks members.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
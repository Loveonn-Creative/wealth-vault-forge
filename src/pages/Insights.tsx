import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Investment Insights</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Strategic perspectives on private capital markets and wealth engineering
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Market Perspectives</h2>
              <p className="text-muted-foreground leading-relaxed">
                Expert analysis on private market dynamics, regulatory shifts, and emerging 
                opportunities in India's evolving capital landscape.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Wealth Engineering</h2>
              <p className="text-muted-foreground leading-relaxed">
                Strategic frameworks for building generational wealth through private capital 
                allocation and sophisticated investment structures.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Performance Intelligence</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data-driven insights into portfolio optimization, risk-adjusted returns, 
                and strategic capital deployment across private market segments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Insights;
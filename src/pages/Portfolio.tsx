import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TrendingUp, Shield, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Portfolio Management</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advanced portfolio oversight for private capital investments
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="exclusive-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-emerald" size={24} />
                <h2 className="text-xl font-semibold text-foreground">Performance Tracking</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Real-time performance monitoring with detailed analytics, risk metrics, 
                and comparative benchmarking across all your private capital positions.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-emerald" size={24} />
                <h2 className="text-xl font-semibold text-foreground">Risk Management</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive risk assessment tools including scenario analysis, 
                stress testing, and portfolio optimization recommendations.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-emerald" size={24} />
                <h2 className="text-xl font-semibold text-foreground">Strategic Allocation</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered allocation suggestions based on market conditions, 
                personal risk profile, and wealth objectives across Foundation, 
                Momentum, and Legacy tiers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="exclusive-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Access Required</h3>
              <p className="text-muted-foreground mb-6">
                Portfolio management tools are available exclusively to verified Wealth Blocks members
              </p>
              <a href="/#access" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Apply for Access
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
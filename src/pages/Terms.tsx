import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Terms and conditions governing your use of Wealth Blocks platform
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Platform Access</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Access to Wealth Blocks is restricted to verified investors who meet 
                eligibility criteria and complete our comprehensive onboarding process.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Minimum investment thresholds apply</li>
                <li>• KYC verification required</li>
                <li>• Risk assessment mandatory</li>
                <li>• Terms subject to regulatory compliance</li>
              </ul>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Investment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All investments are subject to market risks and regulatory requirements. 
                Past performance does not guarantee future returns.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Investments are subject to lock-in periods</li>
                <li>• Returns are subject to market conditions</li>
                <li>• Early withdrawal may incur penalties</li>
                <li>• All investments comply with SEBI regulations</li>
              </ul>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Members are responsible for providing accurate information, 
                maintaining account security, and understanding investment risks 
                before making any commitments.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Regulatory Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wealth Blocks operates under SEBI and RBI guidelines. All investment 
                products are registered and compliant with applicable regulations.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For terms-related questions, contact our legal team at 
                <a href="mailto:legal@wealthblocks.in" className="text-emerald hover:text-emerald-muted transition-colors ml-1">
                  legal@wealthblocks.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
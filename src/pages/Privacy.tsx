import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy and data security are fundamental to our operations
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wealth Blocks employs bank-grade encryption and security protocols to protect 
                all member data, financial information, and investment details.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• End-to-end encryption for all data transmission</li>
                <li>• Secure cloud infrastructure with redundant backups</li>
                <li>• Regular security audits and compliance reviews</li>
                <li>• Limited access on need-to-know basis</li>
              </ul>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect only essential information required for KYC compliance, 
                investment processing, and platform functionality.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Identity verification documents (PAN, Aadhaar)</li>
                <li>• Financial information for risk assessment</li>
                <li>• Investment preferences and objectives</li>
                <li>• Communication and transaction records</li>
              </ul>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data is used exclusively for providing investment services, 
                regulatory compliance, and platform security. We never sell or 
                share personal information with third parties for marketing purposes.
              </p>
            </div>
            
            <div className="exclusive-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, contact our data protection officer at 
                <a href="mailto:privacy@wealthblocks.in" className="text-emerald hover:text-emerald-muted transition-colors ml-1">
                  privacy@wealthblocks.in
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

export default Privacy;
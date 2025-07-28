import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock } from 'lucide-react';

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">Member Support</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated support for verified Wealth Blocks members
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="exclusive-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-emerald" size={24} />
                <h2 className="text-xl font-semibold text-foreground">Email Support</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                For non-urgent inquiries and detailed investment questions
              </p>
              <a href="mailto:support@wealthblocks.in" className="text-emerald hover:text-emerald-muted transition-colors">
                support@wealthblocks.in
              </a>
            </div>
            
            <div className="exclusive-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-emerald" size={24} />
                <h2 className="text-xl font-semibold text-foreground">Priority Access</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Direct line for verified members and urgent matters
              </p>
              <span className="text-emerald">+91 98765 43210</span>
            </div>
          </div>
          
          <div className="exclusive-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-emerald" size={24} />
              <h2 className="text-xl font-semibold text-foreground">Support Hours</h2>
            </div>
            <div className="text-muted-foreground space-y-2">
              <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
              <p>Saturday: 10:00 AM - 4:00 PM IST</p>
              <p>Emergency support available 24/7 for verified members</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
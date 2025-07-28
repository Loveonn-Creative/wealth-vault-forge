import { Mail, Phone, MapPin, Shield, Lock, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Wealth Blocks™</div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Private Capital Engineered for the Select Few
            </p>
            <div className="flex items-center gap-2 text-emerald-muted">
              <Shield size={16} />
              <span className="text-xs">SEBI & RBI-compliant instruments only</span>
            </div>
            <p className="text-primary-foreground/70 text-xs">
              support@wealthblocks.in
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#tiers" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Investment Tiers
                </a>
              </li>
              <li>
                <a href="#performance" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Performance Analytics
                </a>
              </li>
              <li>
                <a href="#access" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Access Protocol
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Portfolio Management
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/research" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Market Intelligence
                </a>
              </li>
              <li>
                <a href="/insights" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Investment Insights
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/support" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Member Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} />
                <span>access@wealthblocks.ai</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>BKC, Mumbai 400051<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-xs text-primary-foreground/70">
              <span>© {currentYear} Wealth Blocks. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-emerald-muted transition-colors flex items-center gap-1">
                  <Lock size={12} />
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-emerald-muted transition-colors flex items-center gap-1">
                  <FileText size={12} />
                  Terms of Service
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-primary-foreground/70">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
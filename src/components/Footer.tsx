import { Mail, Phone, MapPin, Shield, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <span className="text-xs">Private capital • Unregistered funds</span>
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
                <Link to="/tiers" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Investment Tiers
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  The Architecture
                </Link>
              </li>
              <li>
                <Link to="/access" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Access Protocol
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Portfolio Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/research" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Investment Insights
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-primary-foreground/70 hover:text-emerald-muted transition-colors">
                  Member Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:access@wealthblocks.ai"
                aria-label="Email us at access@wealthblocks.ai"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-emerald-muted transition-colors"
              >
                <Mail size={16} />
                <span>access@wealthblocks.ai</span>
              </a>
              <a 
                href="tel:+919876543210"
                aria-label="Call us at +91 98765 43210"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-emerald-muted transition-colors"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
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
                <Link to="/privacy" className="hover:text-emerald-muted transition-colors flex items-center gap-1">
                  <Lock size={12} />
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-emerald-muted transition-colors flex items-center gap-1">
                  <FileText size={12} />
                  Terms of Service
                </Link>
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
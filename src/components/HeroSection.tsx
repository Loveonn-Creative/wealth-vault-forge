import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-steel blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center space-premium">
        {/* Hero Content */}
        <div className="space-y-8">
          {/* Subtle intro */}
          <div className="reveal-fade">
            <p className="text-muted-foreground font-medium tracking-wider uppercase text-sm">
              Private Capital Engineering
            </p>
          </div>

          {/* Main headline */}
          <div className="reveal-up reveal-stagger-1">
            <h1 className="text-hero font-bold text-primary leading-none tracking-tight">
              Wealth Blocks™
              <br />
              <span className="bg-gradient-to-r from-emerald to-steel-dark bg-clip-text text-transparent">
                Private Capital Growth for Discerning Investors
              </span>
            </h1>
          </div>

          {/* Poetic positioning */}
          <div className="reveal-up reveal-stagger-2 max-w-2xl mx-auto">
            <p className="text-subtitle text-muted-foreground leading-relaxed">
              This is not mass-market investing.<br />
              This is private access to 8–23% ROI vehicles—<br />
              curated, verified, and AI-backed.
            </p>
          </div>

          {/* Subtle engagement */}
          <div className="reveal-up reveal-stagger-3 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/access"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-emerald transition-all duration-500 wealth-hover"
              >
                <span className="flex items-center gap-2">
                  ⟶ Apply for Access (Limited Invites)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 reveal-fade">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent opacity-50"></div>
            <p className="text-xs tracking-widest uppercase">Scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
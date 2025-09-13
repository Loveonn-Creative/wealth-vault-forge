import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedROICounter from './AnimatedROICounter';
import LiveWealthTicker from './LiveWealthTicker';
import InteractiveWealthCalculator from './InteractiveWealthCalculator';

const MobileEngagementHero = () => {
  const [currentROI, setCurrentROI] = useState(15.2);
  const [limitedSpots, setLimitedSpots] = useState(23);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate ROI fluctuation
    const roiInterval = setInterval(() => {
      setCurrentROI(prev => {
        const change = (Math.random() - 0.5) * 0.3;
        return Math.max(12, Math.min(23, prev + change));
      });
    }, 4000);

    // Countdown for limited spots
    const spotsInterval = setInterval(() => {
      setLimitedSpots(prev => prev > 0 ? prev - 1 : 50);
    }, 45000);

    return () => {
      clearInterval(roiInterval);
      clearInterval(spotsInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-background via-background to-emerald/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-steel/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first hero content */}
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Live indicator */}
          <div className="flex justify-center">
            <div className="live-indicator">
              <span>LIVE PORTFOLIOS</span>
            </div>
          </div>

          {/* Main ROI display */}
          <div className="space-y-4">
            <h1 className="text-lg sm:text-xl font-medium text-muted-foreground uppercase tracking-wider">
              Private Capital Returns
            </h1>
            <AnimatedROICounter targetValue={currentROI} />
            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Elite investors compound at{' '}
              <span className="text-emerald font-semibold">12-23% annually</span>
              {' '}through private access
            </p>
          </div>

          {/* Quick engagement CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/access"
              className="group flex items-center gap-3 px-6 py-4 bg-emerald hover:bg-emerald/90 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 touch-manipulation"
            >
              <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
              <span>Start with ₹15K</span>
              <Zap className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </Link>
            
            <button 
              className="group flex items-center gap-2 px-6 py-4 border border-emerald/30 text-emerald hover:bg-emerald/10 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Calculate Returns</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald" />
              <span>₹50Cr+ Managed</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald" />
              <span>0% Defaults</span>
            </div>
          </div>

          {/* Limited spots countdown */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium animate-pulse">
            <div className="w-2 h-2 bg-gold rounded-full animate-ping" />
            <span>Only {limitedSpots} spots remaining this month</span>
          </div>

        </div>

        {/* Live ticker */}
        <div className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiveWealthTicker />
        </div>

      </div>

      {/* Interactive calculator section */}
      <div id="calculator" className={`mt-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-2xl mx-auto">
          <InteractiveWealthCalculator />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-muted-foreground to-transparent opacity-50" />
          <p className="text-xs tracking-widest uppercase">Explore</p>
        </div>
      </div>
    </section>
  );
};

export default MobileEngagementHero;
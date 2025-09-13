import { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock } from 'lucide-react';

const LiveWealthTicker = () => {
  const [portfolioValue, setPortfolioValue] = useState(8247832);
  const [activeInvestors, setActiveInvestors] = useState(147);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live portfolio growth
      setPortfolioValue(prev => prev + Math.floor(Math.random() * 1000) + 100);
      
      // Occasionally update active investors
      if (Math.random() > 0.9) {
        setActiveInvestors(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-background/90 to-emerald/5 backdrop-blur-sm border border-emerald/20 rounded-2xl p-4 md:p-6">
      {/* Live indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="live-indicator">
          <span>LIVE</span>
        </div>
        <Clock className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Animated metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="group">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-emerald" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Portfolio Value
            </span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-foreground transition-all duration-300 group-hover:text-emerald">
            {formatCurrency(portfolioValue)}
          </div>
          <div className="text-xs text-emerald font-medium">+12.3% today</div>
        </div>

        <div className="group">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-emerald" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Active Now
            </span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-foreground transition-all duration-300 group-hover:text-emerald">
            {activeInvestors}
          </div>
          <div className="text-xs text-emerald font-medium">investors online</div>
        </div>
      </div>

      {/* Animated progress bar */}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Monthly Target</span>
          <span>87%</span>
        </div>
        <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald to-emerald/70 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '87%' }}
          />
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald/40 rounded-full animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveWealthTicker;
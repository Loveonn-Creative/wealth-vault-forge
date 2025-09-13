import { useState, useEffect } from 'react';
import { Calculator, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveWealthCalculator = () => {
  const [investment, setInvestment] = useState(50000);
  const [returns, setReturns] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateReturns = (amount: number) => {
    const minROI = 0.12; // 12%
    const maxROI = 0.23; // 23%
    const avgROI = (minROI + maxROI) / 2;
    return amount * avgROI;
  };

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setReturns(calculateReturns(investment));
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [investment]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  const presetAmounts = [15000, 50000, 100000, 500000];

  return (
    <div className="relative bg-gradient-to-br from-card to-emerald/5 backdrop-blur-sm border border-emerald/20 rounded-2xl p-6 md:p-8 group hover:border-emerald/40 transition-all duration-500">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald/20 rounded-lg">
          <Calculator className="w-5 h-5 text-emerald" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Wealth Calculator</h3>
          <p className="text-xs text-muted-foreground">Estimated Annual Returns</p>
        </div>
      </div>

      {/* Preset buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {presetAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => setInvestment(amount)}
            className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
              investment === amount
                ? 'bg-emerald text-black shadow-lg'
                : 'bg-muted/50 text-muted-foreground hover:bg-emerald/20 hover:text-emerald'
            }`}
          >
            ₹{amount.toLocaleString('en-IN')}
          </button>
        ))}
      </div>

      {/* Investment input */}
      <div className="mb-6">
        <label className="block text-xs font-medium text-muted-foreground mb-2">
          Investment Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Math.max(15000, parseInt(e.target.value) || 0))}
            className="w-full pl-8 pr-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald/50 transition-all duration-200"
            min="15000"
            step="1000"
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-4 bg-emerald/10 rounded-lg border border-emerald/20">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Projected Annual Returns</div>
            <div className={`text-2xl font-bold text-emerald transition-all duration-300 ${
              isCalculating ? 'animate-pulse' : ''
            }`}>
              {formatCurrency(returns)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1">ROI Range</div>
            <div className="text-lg font-semibold text-emerald">12-23%</div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center">
          * Returns are projected based on historical performance. Past results do not guarantee future outcomes.
        </div>
      </div>

      {/* CTA */}
      <Link
        to="/access"
        className="group/cta flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald hover:bg-emerald/90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Zap className="w-4 h-4" />
        <span>Start with ₹{investment.toLocaleString('en-IN')}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
      </Link>

      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald/20 to-emerald/10 rounded-2xl blur-xl"></div>
      </div>
    </div>
  );
};

export default InteractiveWealthCalculator;
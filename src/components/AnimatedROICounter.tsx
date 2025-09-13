import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

interface AnimatedROICounterProps {
  targetValue: number;
  duration?: number;
  suffix?: string;
}

const AnimatedROICounter = ({ targetValue, duration = 2000, suffix = "%" }: AnimatedROICounterProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newValue = easeOut * targetValue;
      
      setCurrentValue(newValue);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [targetValue, duration]);

  return (
    <div className="relative inline-flex items-center gap-2 group">
      <div className="flex items-baseline gap-1">
        <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald to-emerald/70 bg-clip-text text-transparent">
          {currentValue.toFixed(1)}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-emerald/80">
          {suffix}
        </span>
      </div>
      
      <div className={`transition-all duration-300 ${isAnimating ? 'animate-pulse' : 'group-hover:scale-110'}`}>
        <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-emerald" />
      </div>
      
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 animate-pulse">
        <div className="w-full h-full bg-gradient-to-r from-emerald/40 to-emerald/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default AnimatedROICounter;
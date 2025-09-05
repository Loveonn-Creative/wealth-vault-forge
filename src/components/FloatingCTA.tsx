import { useState, useEffect } from 'react';
import { Zap, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of viewport height
      if (window.scrollY > window.innerHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X size={12} />
        </button>
        
        {/* CTA Button */}
        <Link
          to="/access"
          className="group flex items-center gap-3 bg-emerald hover:bg-emerald/90 text-black px-6 py-4 rounded-xl shadow-emerald/50 shadow-2xl transition-all duration-300 hover:scale-105 font-bold"
        >
          <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
          <span>Apply Now</span>
          <Zap size={20} />
        </Link>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-emerald rounded-xl animate-ping opacity-20 -z-10"></div>
      </div>
    </div>
  );
};

export default FloatingCTA;
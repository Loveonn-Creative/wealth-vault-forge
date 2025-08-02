import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / docHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);
    return () => window.removeEventListener('scroll', updateScrollPercentage);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/30 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-to-r from-emerald to-gold transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
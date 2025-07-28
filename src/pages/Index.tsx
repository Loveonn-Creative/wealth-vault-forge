import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PlatformSection from '@/components/PlatformSection';
import TierBlocks from '@/components/TierBlocks';
import PerformanceSection from '@/components/PerformanceSection';
import AccessFlow from '@/components/AccessFlow';
import EmotionalAnchor from '@/components/EmotionalAnchor';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll reveal animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PlatformSection />
      <TierBlocks />
      <PerformanceSection />
      <AccessFlow />
      <EmotionalAnchor />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

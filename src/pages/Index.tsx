import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TierOverview from '@/components/TierOverview';
import TrustAnchor from '@/components/TrustAnchor';
import SimplifiedCTA from '@/components/SimplifiedCTA';
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
      <TierOverview />
      <TrustAnchor />
      <SimplifiedCTA />
      <EmotionalAnchor />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

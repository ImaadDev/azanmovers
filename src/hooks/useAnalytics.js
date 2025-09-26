import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

// Custom hook for tracking page analytics
export const useAnalytics = () => {
  const startTime = useRef(Date.now());
  const scrollDepth = useRef(0);
  const maxScrollDepth = useRef(0);

  useEffect(() => {
    // Track time on page when component unmounts
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeOnPage);
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollDepth = Math.round((scrollTop / documentHeight) * 100);
      
      if (currentScrollDepth > maxScrollDepth.current) {
        maxScrollDepth.current = currentScrollDepth;
        
        // Track milestone scroll depths
        if (currentScrollDepth >= 25 && scrollDepth.current < 25) {
          trackScrollDepth(25);
        } else if (currentScrollDepth >= 50 && scrollDepth.current < 50) {
          trackScrollDepth(50);
        } else if (currentScrollDepth >= 75 && scrollDepth.current < 75) {
          trackScrollDepth(75);
        } else if (currentScrollDepth >= 90 && scrollDepth.current < 90) {
          trackScrollDepth(90);
        }
        
        scrollDepth.current = currentScrollDepth;
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
      
      // Track final time on page
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeOnPage);
    };
  }, []);

  return {
    trackScrollDepth: (depth) => trackScrollDepth(depth),
    trackTimeOnPage: (time) => trackTimeOnPage(time),
  };
};

// Analytics utility functions for tracking custom events

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, {
      ...parameters,
      event_category: 'Moving Services',
      event_label: 'Azan Movers',
    });
  }
};

// Track service page views
export const trackServiceView = (serviceName) => {
  trackEvent('view_service', {
    service_name: serviceName,
    location: 'Jeddah, Saudi Arabia',
  });
};

// Track quote requests
export const trackQuoteRequest = (serviceType = 'general') => {
  trackEvent('quote_request', {
    service_type: serviceType,
    location: 'Jeddah, Saudi Arabia',
  });
};

// Track contact form submissions
export const trackContactForm = (formType = 'contact') => {
  trackEvent('form_submit', {
    form_type: formType,
    location: 'Jeddah, Saudi Arabia',
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (source = 'unknown') => {
  trackEvent('whatsapp_click', {
    source: source,
    location: 'Jeddah, Saudi Arabia',
  });
};

// Track phone number clicks
export const trackPhoneClick = (source = 'unknown') => {
  trackEvent('phone_click', {
    source: source,
    location: 'Jeddah, Saudi Arabia',
  });
};

// Track blog post views
export const trackBlogView = (postTitle) => {
  trackEvent('blog_view', {
    post_title: postTitle,
    content_type: 'blog',
  });
};

// Track gallery interactions
export const trackGalleryView = (imageName) => {
  trackEvent('gallery_view', {
    image_name: imageName,
    content_type: 'gallery',
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    page_location: window.location.href,
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('time_on_page', {
    time_seconds: timeInSeconds,
    page_location: window.location.href,
  });
};

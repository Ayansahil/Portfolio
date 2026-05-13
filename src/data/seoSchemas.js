export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ayan Web Solutions",
  "image": "https://ayanportfolio.in/og-image.jpg",
  "description": "Professional website development, landing pages, and e-commerce stores in Bhopal.",
  "url": "https://ayanportfolio.in",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.2599",
    "longitude": "77.4126"
  },
  "priceRange": "$$"
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayan",
  "url": "https://ayanportfolio.in",
  "jobTitle": ["Full Stack Developer", "Freelance Web Developer"],
  "worksFor": {
    "@type": "Organization",
    "name": "Ayan Web Solutions"
  },
  "knowsAbout": ["React", "Vite", "Node.js", "MERN Stack", "Tailwind CSS", "Technical SEO"]
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ayan Web Solutions",
  "image": "https://ayanportfolio.in/og-image.jpg",
  "description": "We build fast, professional, mobile-friendly websites that improve credibility and generate enquiries.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  }
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ayan Web Solutions",
  "url": "https://ayanportfolio.in"
};

export const getPortfolioSchema = (url) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio - Ayan Web Solutions",
  "url": url,
  "description": "Check out some of our recent web development projects."
});

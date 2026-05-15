export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ayanportfolio.in/#ayan-sahil",
  "name": "Ayan Sahil",
  "url": "https://ayanportfolio.in",
  "image": "https://ayanportfolio.in/og-image.jpg",
  "jobTitle": "Full Stack Developer",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Freelance Web Developer",
    "estimatedSalary": {
      "@type": "MonetaryAmountDistribution",
      "currency": "INR"
    }
  },
  "worksFor": {
    "@id": "https://ayanportfolio.in/#organization"
  },
  "founderOf": {
    "@id": "https://ayanportfolio.in/#organization"
  },
  "sameAs": [
    "https://www.linkedin.com/in/ayan-sahil-81aa04249/",
    "https://github.com/Ayansahil",
    "https://www.youtube.com/@AyanSahil",
    "https://www.instagram.com/ayan_sahil7"
  ],
  "knowsAbout": [
    "React", "Vite", "Node.js", "MERN Stack", "Tailwind CSS", "Technical SEO", "Entity SEO", "Local SEO"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ayanportfolio.in/#organization",
  "name": "Ayan Web Solutions",
  "url": "https://ayanportfolio.in",
  "logo": "https://ayanportfolio.in/vite.svg",
  "image": "https://ayanportfolio.in/og-image.jpg",
  "description": "Ayan Web Solutions, founded by Ayan Sahil, provides professional website development, landing pages, and e-commerce stores in Bhopal.",
  "founder": {
    "@id": "https://ayanportfolio.in/#ayan-sahil"
  },
  "sameAs": [
    "https://share.google/DtteWWq6SgMtpsu3D"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "ayans8557@gmail.com",
    "availableLanguage": ["English", "Hindi"]
  },
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

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ayan Web Solutions",
  "image": "https://ayanportfolio.in/og-image.jpg",
  "description": "We build fast, professional, mobile-friendly websites that improve credibility and generate enquiries.",
  "brand": {
    "@id": "https://ayanportfolio.in/#organization"
  },
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
  "@id": "https://ayanportfolio.in/#website",
  "name": "Ayan Web Solutions",
  "url": "https://ayanportfolio.in",
  "publisher": {
    "@id": "https://ayanportfolio.in/#organization"
  }
};

export const getPortfolioSchema = (url) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio - Ayan Web Solutions",
  "url": url,
  "description": "Check out some of our recent web development projects by Ayan Sahil and Ayan Web Solutions."
});

export const getBreadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Ayan Sahil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ayan Sahil is a Full Stack Developer and the founder of Ayan Web Solutions, based in Bhopal."
      }
    },
    {
      "@type": "Question",
      "name": "What services does Ayan Web Solutions provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide UI/UX Design, Web Development, Backend Development, and Performance Optimization."
      }
    }
  ]
});

export const getServiceSchema = (serviceName, url, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "url": url,
  "description": description,
  "provider": {
    "@id": "https://ayanportfolio.in/#organization"
  }
});

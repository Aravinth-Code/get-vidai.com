/**
 * Landing Page Configuration System
 *
 * This file allows you to easily customize landing pages without touching the HTML structure.
 * Each page can have its own configuration object that defines content, styling, and behavior.
 */

// ============================================
// DEFAULT CONFIGURATION
// ============================================

const defaultConfig = {
  // Brand Settings
  brand: {
    name: "GetVidai",
    tagline: "AI Support Agent from Your Content",
    logoType: "chat-bubble" // Options: "chat-bubble", "text", "image"
  },

  // Theme Customization
  theme: {
    primaryColor: "#3b82f6",
    primaryColorDark: "#2563eb",
    accentColor: "#60a5fa",
    backgroundColor: "#ffffff",
    textColor: "#111827"
  },

  // Navigation
  navigation: {
    links: [
      { text: "How It Works", href: "#how-it-works" },
      { text: "Features", href: "#features" },
      { text: "Pricing", href: "#pricing" }
    ],
    ctaText: "Get Started",
    ctaHref: "#early-access"
  },

  // Hero Section
  hero: {
    badge: {
      text: "Now in Beta - Limited Spots Available",
      icon: "pulse-dot"
    },
    title: {
      main: "Turn your website, docs, and PDFs",
      highlight: "AI support Agent",
      suffix: "into an"
    },
    description: "No coding. No hallucinations. Just powerful AI that knows your business and helps customers instantly.",
    ctas: [
      {
        text: "Get Early Access",
        href: "#early-access",
        style: "primary",
        icon: "arrow-right"
      },
      {
        text: "See How It Works",
        href: "#how-it-works",
        style: "secondary"
      }
    ],
    stats: [
      { value: "80%", label: "Support Load Reduced" },
      { value: "<2s", label: "Average Response Time" },
      { value: "24/7", label: "Always Available" }
    ]
  },

  // Features/Problems Section
  features: {
    sectionTitle: "Customer Support Is Broken",
    sectionSubtitle: "Teams waste hours answering the same questions while customers wait for help",
    badge: "THE PROBLEM",
    items: [
      {
        title: "Repeated Questions",
        description: "Your team answers the same FAQs dozens of times per day, burning valuable hours that could be spent building.",
        icon: "refresh"
      },
      {
        title: "Scattered Knowledge",
        description: "Answers exist in docs, blogs & PDFs — but customers can't find them, leading to frustration and churn.",
        icon: "question"
      },
      {
        title: "Unreliable AI Bots",
        description: "Generic chatbots hallucinate wrong answers, damaging trust and creating more support tickets.",
        icon: "alert"
      }
    ]
  },

  // How It Works Section
  howItWorks: {
    sectionTitle: "How GetVidai Works",
    sectionSubtitle: "Go from content to AI support agent in minutes, not weeks",
    badge: "SIMPLE 3-STEP PROCESS",
    steps: [
      {
        number: 1,
        label: "STEP ONE",
        title: "Add Your Content",
        description: "Upload your PDFs, documentation, website links, or any knowledge base. GetVidai accepts any format.",
        tags: ["PDFs", "Docs", "Websites", "FAQs"]
      },
      {
        number: 2,
        label: "STEP TWO",
        title: "AI Learns Instantly",
        description: "Our advanced AI automatically indexes, embeds, and structures your content for accurate retrieval.",
        tags: ["Auto-Index", "Semantic Search", "No Training"]
      },
      {
        number: 3,
        label: "STEP THREE",
        title: "Deploy Anywhere",
        description: "Embed on your website, integrate with your apps, or use our dashboard. Start helping customers instantly.",
        tags: ["Widget", "API", "Dashboard"]
      }
    ]
  },

  // CTA Section
  cta: {
    badge: "Limited Beta Access - Only 100 Spots Left",
    title: "Get Early Access Today",
    subtitle: "Join the waitlist and be among the first to launch your AI support agent.",
    description: "No credit card required. Setup in 5 minutes.",
    form: {
      placeholder: "Enter your email address",
      buttonText: "Join Waitlist",
      disclaimer: "By signing up, you agree to receive updates about GetVidai. Unsubscribe anytime."
    },
    trustBadges: [
      { text: "SOC 2 Compliant", icon: "shield" },
      { text: "GDPR Compliant", icon: "lock" },
      { text: "Enterprise Ready", icon: "badge" }
    ]
  },

  // Footer
  footer: {
    description: "Transform your content into an intelligent AI support agent that delights customers 24/7.",
    sections: [
      {
        title: "Product",
        links: [
          { text: "Features", href: "#features" },
          { text: "Pricing", href: "#pricing" },
          { text: "Use Cases", href: "#use-cases" },
          { text: "Documentation", href: "#docs" }
        ]
      },
      {
        title: "Company",
        links: [
          { text: "About", href: "#about" },
          { text: "Blog", href: "#blog" },
          { text: "Careers", href: "#careers" },
          { text: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Legal",
        links: [
          { text: "Privacy Policy", href: "#privacy" },
          { text: "Terms of Service", href: "#terms" },
          { text: "Security", href: "#security" },
          { text: "GDPR", href: "#gdpr" }
        ]
      }
    ],
    social: [
      { platform: "twitter", href: "#", icon: "twitter" },
      { platform: "github", href: "#", icon: "github" },
      { platform: "linkedin", href: "#", icon: "linkedin" }
    ],
    copyright: "© 2026 GetVidai. All rights reserved."
  },

  // Meta/SEO
  meta: {
    title: "GetVidai – AI Support Agent from Your Content",
    description: "Transform your website, docs, and PDFs into an AI support agent. No coding required. 24/7 instant answers for your customers.",
    keywords: "AI support, chatbot, customer service, automation",
    ogImage: "/assets/images/og-image.jpg"
  },

  // Form Handler
  forms: {
    earlyAccessEndpoint: "/api/early-access",
    onSubmit: (data) => {
      console.log("Form submitted:", data);
      // Add your form submission logic here
      alert("Thank you! We will contact you soon.");
    }
  }
};

// ============================================
// PAGE-SPECIFIC CONFIGURATIONS
// ============================================

/**
 * Example: Alternative product landing page
 */
const productPageConfig = {
  ...defaultConfig,
  brand: {
    name: "GetVidai Pro",
    tagline: "Enterprise AI Support Solution"
  },
  hero: {
    ...defaultConfig.hero,
    title: {
      main: "Scale customer support",
      highlight: "AI-powered automation",
      suffix: "with"
    },
    description: "Enterprise-grade AI support that integrates with your existing tools and scales with your business."
  }
};

/**
 * Example: Feature-specific landing page
 */
const featurePageConfig = {
  ...defaultConfig,
  hero: {
    ...defaultConfig.hero,
    title: {
      main: "Eliminate repetitive support tickets",
      highlight: "intelligent automation",
      suffix: "with"
    },
    stats: [
      { value: "90%", label: "Ticket Reduction" },
      { value: "5min", label: "Setup Time" },
      { value: "∞", label: "Scalability" }
    ]
  }
};

// ============================================
// CONFIGURATION LOADER
// ============================================

class LandingPageConfig {
  constructor(customConfig = {}) {
    this.config = this.mergeConfig(defaultConfig, customConfig);
  }

  mergeConfig(base, custom) {
    return {
      ...base,
      ...custom,
      // Deep merge for nested objects
      brand: { ...base.brand, ...custom.brand },
      theme: { ...base.theme, ...custom.theme },
      navigation: { ...base.navigation, ...custom.navigation },
      hero: {
        ...base.hero,
        ...custom.hero,
        title: { ...base.hero.title, ...custom.hero?.title },
        badge: { ...base.hero.badge, ...custom.hero?.badge }
      },
      features: { ...base.features, ...custom.features },
      howItWorks: { ...base.howItWorks, ...custom.howItWorks },
      cta: {
        ...base.cta,
        ...custom.cta,
        form: { ...base.cta.form, ...custom.cta?.form }
      },
      footer: { ...base.footer, ...custom.footer },
      meta: { ...base.meta, ...custom.meta },
      forms: { ...base.forms, ...custom.forms }
    };
  }

  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.config);
  }

  set(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, key) => obj[key] = obj[key] || {}, this.config);
    target[lastKey] = value;
  }

  applyTheme() {
    const theme = this.config.theme;
    const root = document.documentElement;

    if (theme.primaryColor) {
      root.style.setProperty('--primary-500', theme.primaryColor);
    }
    if (theme.primaryColorDark) {
      root.style.setProperty('--primary-700', theme.primaryColorDark);
    }
  }

  updateMetaTags() {
    const meta = this.config.meta;
    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Initialize landing page with configuration
 */
function initLandingPage(customConfig = {}) {
  const landingPage = new LandingPageConfig(customConfig);
  landingPage.applyTheme();
  landingPage.updateMetaTags();
  return landingPage;
}

/**
 * Handle form submissions
 */
function setupFormHandlers(config) {
  const forms = document.querySelectorAll('[data-landing-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (config.forms.onSubmit) {
        config.forms.onSubmit(data);
      }
    });
  });
}

/**
 * Mobile menu toggle
 */
function setupMobileMenu() {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }
}

/**
 * Smooth scroll with offset for fixed header
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // Height of fixed header
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// ============================================
// EXPORT CONFIGURATIONS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    defaultConfig,
    productPageConfig,
    featurePageConfig,
    LandingPageConfig,
    initLandingPage,
    setupFormHandlers,
    setupMobileMenu,
    setupSmoothScroll
  };
}

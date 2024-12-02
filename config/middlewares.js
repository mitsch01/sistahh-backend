module.exports = [
  // Logger middleware
  "strapi::logger",

  // Error handling middleware
  "strapi::errors",

  // Security middleware
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "https://www.sistahh.de"],
          "media-src": ["'self'", "data:", "blob:", "https://www.sistahh.de"],
          upgradeInsecureRequests: null
        }
      }
    }
  },

  // CORS middleware
  {
    name: "strapi::cors",
    config: {
      origin: ["https://sistahh.de"],
      methods: ["GET", "POST", "PUT", "DELETE"]
    }
  },

  // Other required middlewares
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public"
]

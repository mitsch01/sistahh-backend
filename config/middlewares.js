module.exports =
  [
    {
      name: "strapi::cors",
      config: {
        origin: ["https://sistahh.de"],
        methods: ["GET", "POST", "PUT", "DELETE"]
      }
    }
  ],
  ["strapi::logger", "strapi::errors", "strapi::security", "strapi::cors", "strapi::poweredBy", "strapi::query", "strapi::body", "strapi::session", "strapi::favicon", "strapi::public"]

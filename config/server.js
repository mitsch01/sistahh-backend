module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["rNpX0tjCL5d7k3VzjIELEA==", "wzLBtiOz6i+5ciahRnVRiQ=="])
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false)
  },
  url: env("RENDER_EXTERNAL_URL")
})

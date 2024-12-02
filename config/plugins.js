module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "OtbGmQDJ3e5mv9EA09OLZA==")
    }
  }
})

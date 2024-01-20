const config = {
  production: {
    PORT: 1000,
    SECRET: "PROD",
  },
  development: {
    PORT: 3000,
    SECRET: "DEV",
    TOKEN_KEY: "token",
    ALLOWED_ORIGINS: "http://lovalhost:4200",
  },
};

module.exports = config[process.env.node_env || "development"];

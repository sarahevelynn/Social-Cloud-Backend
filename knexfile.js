module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///socialcloud"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};

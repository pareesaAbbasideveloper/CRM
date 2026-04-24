require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 4000,
    databaseURI: process.env.MONGODB_URI,
    nodeEnv : process.env.NODE_ENV || "development",
    accessTokenSecret: "your_fallback_secret",
});

module.exports = config;

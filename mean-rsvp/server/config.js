// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'tieuly.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://baodongco:root@ds033145.mlab.com:33145/mean'
  };
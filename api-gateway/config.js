
var config = {};

config.web = {};

config.web.secret = "topsecret";

config.web.port = process.env.PORT || '3000';

module.exports = config;
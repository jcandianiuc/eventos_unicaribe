const dotenv = require("dotenv");

module.exports.bootstrap = async function() {
  dotenv.config();
  return done();
};

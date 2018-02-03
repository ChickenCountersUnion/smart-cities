const applyMiddleware = require('./middleware');

module.exports = (app) => {
  // Pass off to middleware
  applyMiddleware(app);

  // Pass off to routing
};

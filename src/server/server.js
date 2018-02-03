const path = require('path');
const applyMiddleware = require('./middleware');
const routes = require('./routes');

module.exports = (app) => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './views'));

  // Pass off to middleware
  applyMiddleware(app);

  // Add in routes
  app.use(routes);
};

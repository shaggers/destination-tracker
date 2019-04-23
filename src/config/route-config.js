module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const userRoutes = require("../routes/users");
      const navigationRoutes = require("../routes/navigation");

      app.use(staticRoutes);
      app.use(userRoutes);
      app.use(navigationRoutes);
    }
}
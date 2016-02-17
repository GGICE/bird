var Vue = require('vue'),
  Router = require('vue-router'),
  App = require('./components/App.vue');

// install router
Vue.use(Router);

// routing
var router = new Router();

router.map({
  // '/': {
  //   component: App
  // }
});

router.start(App, '#app');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import microApp from '@micro-zoe/micro-app'

microApp.start()

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

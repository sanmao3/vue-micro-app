const routes = [
  { 
    path: '/', 
    redirect: '/home'
  }, {
    path: '/home', 
    component: () => import('./pages/Home.vue'),
    redirect: '/home/hello',
    children: [{
      path: 'hello', 
      component: () => import('./components/HelloWorld.vue')
    }]
  }, {
    path: '/home/app1',
    component: () => import('./pages/Home.vue'),
    redirect: '/home/app1/hello',
    children: [{
      path: 'hello', 
      component: () => import('./pages/App1Home.vue')
    }]
  }
]

export default routes
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
      component: {
        template: '<micro-app name="micro-app1" url="http://localhost:3001/" baseroute="/app1"></micro-app>'
      }
    }]
  }
]

export default routes
import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import Something from '~/components/something.vue'
import Home from '~/components/home.vue'
import NotFoundComponent from '~/pages/404.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/Something'
  },{
    path: '/Home',
    component: Home,
    // children: [
    //   {
    //       path: '',
    //       redirect: '1'
    //   },
    //   {
    //       path: '1',
    //       component: Something
    //   }
    // ]
  },{
    path: '/Something',
    component: Something,
  },{
        path: '*',
        component: NotFoundComponent,
        redirect: '/'
    }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})

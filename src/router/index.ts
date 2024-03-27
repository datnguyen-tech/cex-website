import Cookies from 'js-cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createRouter, createWebHistory } from 'vue-router'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import('@/modules/landing/view/LandingPage.vue'),
      meta: {
        auth: false,
        whiteList: true
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if (to.meta?.whiteList) {
    next()
    return
  }

  if (!to.meta?.auth) {
    if (Cookies.get('access_token')) {
      location.href = '/'
      return
    }
    next()
    return
  }

  if (!Cookies.get('access_token')) {
    Cookies.remove('access_token')
    location.href = '/login'
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

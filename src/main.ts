import listModule from '@/modules'
import 'element-plus/es/components/message/style/css'
import Cookies from 'js-cookie'
import { forEach } from 'lodash-es'
import { RouteRecordRaw } from 'vue-router'

import App from './App.vue'
import './assets/styles/index.scss'
import './assets/styles/tailwind/index.css'
import router from './router'
import { useAuthStore } from './stores/auth.store'
import { useBaseStore } from './stores/base.store'
import { ModuleInterface } from './types/module.types'

const app = createApp(App)

forEach(listModule, (module: ModuleInterface) => {
  forEach(module.router, (value: RouteRecordRaw) => {
    router.addRoute(value)
  })
})
app.use(createPinia())

const init = async () => {
  const { getUserInfo } = useAuthStore()
  const isLogin = Cookies.get('access_token') ? true : false


  const promiseAll: Promise<any>[] = []
  if (isLogin) {
    promiseAll.push(getUserInfo())
  }
  await Promise.all(promiseAll)

  app.use(router)
  app.mount('#app')
}
init()

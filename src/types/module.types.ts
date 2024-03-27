import type { RouteRecordRaw } from 'vue-router'

export interface ModuleInterface {
  router?: Readonly<RouteRecordRaw[]>
}

export type LIST_MENU = 'Order'

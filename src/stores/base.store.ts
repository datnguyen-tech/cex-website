import { apiAuth, apiParams } from '@/services'
import { filter, union } from 'lodash-es'
import { defineStore } from 'pinia'

import { ILocation } from '@/types/auth.types'
import { ITab } from '@/types/component.types'
import { IGroupCategory, IProductCategory } from '@/types/param.types'
import { DRAWER_NAME, POPUP_NAME } from '@/types/popup.types'

import { useAuthStore } from './auth.store'

export const useBaseStore = defineStore('base', () => {
  const popup = ref<string[]>([])
  const drawer = ref<string[]>([])
  const isDesktop = ref(true)
  const systemParams = ref<Record<string, any>>({})


  const setOpenPopup = (popupName: POPUP_NAME, isOpen = true) => {
    if (isOpen) {
      popup.value = union(popup.value, [popupName])
    } else {
      popup.value = filter(popup.value, value => {
        return value !== popupName
      })
    }
  }

  const setOpenDrawer = (drawName: DRAWER_NAME, isOpen = true) => {
    if (isOpen) {
      drawer.value = union(drawer.value, [drawName])
    } else {
      drawer.value = filter(drawer.value, value => {
        return value !== drawName
      })
    }
  }
  return {
    popup,
    drawer,
    setOpenPopup,
    setOpenDrawer,
    isDesktop
  }
})

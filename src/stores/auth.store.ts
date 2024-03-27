import request from '@/plugins/request'
import { apiAuth } from '@/services'
import Cookies from 'js-cookie'
import { find, findIndex, forEach, includes, union } from 'lodash-es'
import { defineStore } from 'pinia'

import { IBodyLogin, IUser } from '@/types/auth.types'

import { useBaseStore } from './base.store'

export const useAuthStore = defineStore('auth', () => {
  const access_token = Cookies.get('access_token') || ''
  const accessToken = ref(access_token)
  const user = ref<IUser>({
    id: 0,
    accountId: 0,
    username: '',
    type: '',
    status: '',
    firstName: '',
    lastName: '',
    fullName: '',
    displayName: '',
    avatar: undefined,
    birthday: undefined,
    yearOfBirth: undefined,
    nationalityCode: undefined,
    nationality: undefined,
    phone: '',
    phoneVerified: false,
    email: '',
    emailVerified: false,
    countryId: 0,
    countryCode: '',
    countryName: '',
    stateId: undefined,
    cityId: undefined,
    cityName: undefined,
    districtId: undefined,
    districtName: undefined,
    address: undefined,
    userGroupId: undefined,
    pinEnabled: 0,
    login2FaEnabled: 0,
    lastTimeLogin: '',
    roles: []
  })

  const isLogin = computed(() => {
    return !!Cookies.get('access_token') || false
  })

  const login = async (body: IBodyLogin, setToken = true) => {
    try {
      const rs = await apiAuth.login(body)
      accessToken.value = rs.data.accessToken
      if (setToken) {
        Cookies.set('access_token', accessToken.value, { expires: 3 })
        request.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
      }
      await getUserInfo(setToken)
      return Promise.resolve(rs.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const logout = async () => {
    try {
      await apiAuth.logout(user.value.id)
      Cookies.set('access_token', '')
      request.defaults.headers.common['Authorization'] = ''
      location.href = '/login'
      localStorage.removeItem('locationActive')
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const getUserInfo = async (login = true) => {
    try {
      const rs = await apiAuth.getUserInfo(login, accessToken.value)
      user.value = rs.data
      return Promise.resolve(user.value)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const setBearerToken = (token: string) => {
    Cookies.set('access_token', token, { expires: 3 })
    accessToken.value = token
    request.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return {
    accessToken,
    isLogin,
    login,
    logout,
    getUserInfo,
    setBearerToken,
    user
  }
})

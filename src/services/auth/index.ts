import request from '@/plugins/request'


import {
  IBodyChangePassword,
  IBodyGenCode,
  IBodyLogin,
  IBodySetNewPass,
  IBodyVerifyCode,
  ILocation,
  ILogin,
  IUser
} from '@/types/auth.types'
import { IResponse, IResponseData } from '@/types/response.types'

import useRemoveParams from '@/composables/useRemoveParams'

import { name, version } from '../../../package.json'

export default class AuthService {
  prefix = 'authen/v1'

  async getVisitorId(): Promise<string> {
    try {
      const fpPromise = FingerprintJS.load()
      const fp = await fpPromise
      const result = await fp.get()
      return Promise.resolve(result.visitorId)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getInfoDevice(): Promise<string> {
    const info = platform.parse(window.navigator.userAgent)

    const deviceUuid = await this.getVisitorId()

    const appName = name
    const appVersion = version

    const deviceType = 'browser'
    const deviceOs = info.os?.family
    const deviceOsVersion = `${info.os?.family} ${info.os?.version}`
    const deviceName = `${info.name} ${info.version}`
    return `${appName}&space;${appVersion}&space;${appVersion}&space;${deviceType}&space;${deviceOs}&space;${deviceName}&space;${deviceUuid}&space;${deviceOsVersion}`
  }

  async generateCode(body: IBodyGenCode): Promise<IResponse<any>> {
    try {
      const result = await request.post(`${this.prefix}/twoFa/EMAIL/generate-code`, body)
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async changePassWord(body: IBodyChangePassword, userId: number): Promise<IResponse<any>> {
    try {
      const result = await request.post(`${this.prefix}/user/${userId}/change-pass`, body)
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async verifyCode(body: IBodyVerifyCode): Promise<IResponse<any>> {
    try {
      const device = await this.getInfoDevice()
      const result = await request.post(`${this.prefix}/twoFa/EMAIL/verify-code`, body, {
        headers: {
          Device: device
        }
      })
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async login(body: IBodyLogin): Promise<IResponse<ILogin>> {
    try {
      const device = await this.getInfoDevice()
      const result = await request.post(`${this.prefix}/auth/login`, body, {
        headers: {
          Device: device
        }
      })
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async logout(id: number): Promise<IResponse<any>> {
    try {
      const result = await request.post(`${this.prefix}/user/${id}/logout`)
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async requestForgetPass(params: Record<string, any>): Promise<IResponse<any>> {
    try {
      const result = await request.post(`${this.prefix}/auth/forget-pass/request`, {}, { params })
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async setNewPassword(body: IBodySetNewPass): Promise<IResponse<any>> {
    try {
      const result = await request.post(`${this.prefix}/auth/forget-pass`, body)
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getUserInfo(login: boolean, accessToken?: string): Promise<IResponse<IUser>> {
    try {
      if (login) {
        const result = await request.get(`${this.prefix}/user/0/info`)
        return Promise.resolve(result.data)
      } else {
        const result = await request.get(`${this.prefix}/user/0/info`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        return Promise.resolve(result.data)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getListLocation(userId: number, login: boolean, accessToken?: string): Promise<IResponse<ILocation[]>> {
    try {
      if (login) {
        const result = await request.get(`${this.prefix}/location/user/${userId}/list`)
        return Promise.resolve(result.data)
      } else {
        const result = await request.get(`${this.prefix}/location/user/${userId}/list`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        return Promise.resolve(result.data)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getListUser(
    accountId: number,
    params: Record<string, any>
  ): Promise<IResponse<IResponseData<Array<Record<string, any>>>>> {
    try {
      const result = await request.get(`${this.prefix}/user/account/${accountId}/list`, { params: useRemoveParams(params) })
      return Promise.resolve(result.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

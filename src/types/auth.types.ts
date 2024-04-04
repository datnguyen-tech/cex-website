import { UserRoles } from './role.types'

export interface IBodyGenCode {
  email: string
  type: string
  reason: string
}
export interface IBodyVerifyCode {
  email: string
  verificationCode: string
}
export interface IBodyLogin {
  userName: string
  password: string
  verificationCode?: string
}
export interface IBodySetNewPass {
  email: string
  newPassword: string
  confirmPassword: string
  verificationCode: string
}

export interface IBodyChangePassword {
  email: string
  oldPassword: string
  newPassword: string
  verificationCode: string | null
}

export interface ILogin {
  id: number
  accountId: number
  accessToken: string
  refreshToken: any
  loginStatus: string
  avatar: string
  username: string
  firstName: string
  lastName: string
  fullName: string
  countryCode: string
  status: string
  viewStatus: any[]
}

interface IUserRole {
  id: number
  userId: number
  objectType: string
  roleId: number
  roleCode: UserRoles
  status: string
  locationId: any
  accountId: number
  accountNo: string
}

export interface IUser {
  id: number
  accountId: number
  username: string
  type: string
  status: string
  firstName: string
  lastName: string
  fullName: string
  displayName: string
  avatar: any
  birthday: any
  yearOfBirth: any
  nationalityCode: any
  nationality: any
  phone: string
  phoneVerified: boolean
  email: string
  emailVerified: boolean
  countryId: number
  countryCode: string
  countryName: string
  stateId: any
  cityId: any
  cityName: any
  districtId: any
  districtName: any
  address: any
  userGroupId: any
  pinEnabled: number
  login2FaEnabled: number
  lastTimeLogin: string
  roles: IUserRole[]
}

export interface ILocation {
  id: number
  name: string
  avatar: string
  description?: string
  email: string
  phone: string
  status: string
  checkedManager?: string
  checkedPacker?: string
}

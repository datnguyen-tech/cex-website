import { RouteParamsRaw } from 'vue-router'

import { ModuleType } from '@/types/role.types'

import { IQuery } from './filter.types'

export interface IMenu {
  title: string
  icon?: string
  routerName?: string
  subMenu?: IMenu[]
  params?: RouteParamsRaw
  moduleCode?: ModuleType
  rootPath?: string
  onlyChainManagement?: boolean
}

export interface ITab {
  id?: number
  title: string
  tabValue: string | number
  routerName?: string
  [x: string]: any
}

type placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
export interface IDropdown {
  placeholder?: string
  placement?: placement
  trigger?: 'click' | 'hover'
  hideOnClick?: boolean
  showTimeout?: number
  hideTimeout?: number
  popperClass?: string
  splitButton?: boolean
  showArrow?: boolean
}

export interface ISelect {
  multiple?: boolean
  disabled?: boolean
  clearable?: boolean
  filterable?: boolean
  filterMethod?: (value: string) => any
  remote?: boolean
  remoteMethod?: (value: string) => any
  popperClass?: string
  reserveKeyword?: boolean
  showPrefix?: boolean
}

export interface ITable<T> {
  loading?: boolean
  emptyText?: string
  data: T[]
  query?: IQuery
  label?: string
  showPagination?: boolean
}

export interface ISummary {
  title: string
  prefix?: boolean
  value: number
  highlight?: boolean
}

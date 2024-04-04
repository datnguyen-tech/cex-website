import { IQuery } from '@/types/filter.types'

export default function useGetQueryString(query: Record<string, any>): IQuery | any {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const _query: Record<string, any> = {}

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key]
      if (isNaN(Number(element))) {
        _query[key] = element
      } else {
        _query[key] = +element
      }
    }
  }
  return { ...query, ..._query }
}

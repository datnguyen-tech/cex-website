import useRemoveParams from './useRemoveParams'

export default function usePushQueryString(query: Record<string, any>) {
  const _query = useRemoveParams(query)
  const url = Object.keys(_query)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(_query[key])
    })
    .join('&')
  history.pushState(null, '', `${location.pathname}?${url}`)
}

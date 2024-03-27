export default function useTimeAgo(time: string | number) {
  return useFormatTimeAgo(time).value
}

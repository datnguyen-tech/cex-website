export default function useDisableDatePicker(time: string | number, type: 'FROM' | 'TO', value: string | number) {
  if (value) {
    if (type === 'FROM') {
      return new Date(time).getTime() / 1000 > new Date(value).getTime() / 1000
    } else {
      return new Date(time).getTime() / 1000 < new Date(value).getTime() / 1000 - 7 * 60 * 60
    }
  }
}

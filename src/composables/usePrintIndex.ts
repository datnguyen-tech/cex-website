import { IQuery } from '@/types/filter.types'

export default function usePrintIndex(index: number, query: IQuery): number {
  return (query.page - 1) * query.limit + index + 1
}

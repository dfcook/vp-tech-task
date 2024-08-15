import { ApiRequest, FacetOption } from '@/types'

export const urlToQuery = (
  category: string,
  searchParams: URLSearchParams
): ApiRequest => {
  const request: ApiRequest = {
    query: category,
    pageNumber: 0,
    size: 30,
    additionalPages: Number(searchParams.get('ap') ?? 0),
    sort: Number(searchParams.get('sb') ?? 1),
    facets: {},
  }

  searchParams.forEach((value, key) => {
    if (key.startsWith('f.')) {
      const decodedValue = JSON.parse(atob(value)) as FacetOption
      request.facets[key.replace('f.', '')] = [
        ...(request.facets[key.replace('f.', '')] ?? []),
        decodedValue,
      ]
    }
  })

  return request
}

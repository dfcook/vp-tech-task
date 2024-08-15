import { ApiRequest, ApiResponse } from '@/types'

export const fetchProducts = async (
  request: ApiRequest
): Promise<ApiResponse> => {
  const response = await fetch(process.env.PRODUCT_SEARCH_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
  return response.json()
}

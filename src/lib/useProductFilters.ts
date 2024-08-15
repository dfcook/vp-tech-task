import { FacetOption } from '@/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const useProductFilters = (param: string) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const selectedValues: FacetOption[] =
    searchParams.getAll(param).map((value) => {
      try {
        return JSON.parse(atob(value))
      } catch {
        return null
      }
    }) ?? []

  const toggleFilterValue = useCallback(
    (value: FacetOption, include: boolean) => {
      const valueToSerialize = {
        value: value.value,
        identifier: value.identifier,
      }
      const params = new URLSearchParams(searchParams.toString())
      if (include) {
        params.append(param, btoa(JSON.stringify(valueToSerialize)))
      } else {
        params.delete(param, btoa(JSON.stringify(valueToSerialize)))
      }

      router.push(`${pathname}?${params.toString()}`)
    },

    [searchParams, param, pathname, router]
  )

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.forEach((value, key) => {
      if (key.startsWith('f.')) {
        params.delete(key)
      }
    })
    router.push(`${pathname}?${params.toString()}`)
  }

  return { clearFilters, selectedValues, toggleFilterValue }
}

export default useProductFilters

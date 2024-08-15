import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const useProductSearchParams = (param: string, defaultValue: string) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const selectedValue = searchParams.get(param) ?? defaultValue

  const onValueChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(param, value)

      router.push(`${pathname}?${params.toString()}`)
    },

    [searchParams, param, pathname, router]
  )

  return { selectedValue, onValueChange }
}

export default useProductSearchParams

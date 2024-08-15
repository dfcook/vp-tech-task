'use client'

import { Button } from '@/components/ui/button'
import useProductFilters from '@/lib/useProductFilters'
import { FC } from 'react'

interface ClearFiltersButtonProps {
  filterCount: number
}

const ClearFiltersButton: FC<ClearFiltersButtonProps> = ({ filterCount }) => {
  const { clearFilters } = useProductFilters('all')

  return (
    <Button disabled={filterCount === 0} onClick={clearFilters}>
      Clear All Filters
    </Button>
  )
}

export default ClearFiltersButton

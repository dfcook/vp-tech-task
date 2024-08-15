'use client'

import { Button } from '@/components/ui/button'
import useProductSearchParams from '@/lib/useProductSearchParams'
import { FC } from 'react'

interface LoadMoreButtonProps {
  viewed: number
  totalResults: number
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ viewed, totalResults }) => {
  const { selectedValue, onValueChange } = useProductSearchParams('ap', '1')

  return (
    <Button
      disabled={viewed >= totalResults}
      onClick={() => onValueChange((Number(selectedValue) + 1).toString())}
    >
      Load More
    </Button>
  )
}

export default LoadMoreButton

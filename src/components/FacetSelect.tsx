'use client'

import { Facet } from '@/types'
import { FC } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import useProductFilters from '@/lib/useProductFilters'

interface FacetProps {
  facet: Facet
}

const FacetSelect: FC<FacetProps> = ({ facet }) => {
  const { selectedValues, toggleFilterValue } = useProductFilters(
    `f.${facet.identifier}`
  )

  return (
    <Card>
      <CardHeader>
        <h3>{facet.displayName}</h3>
      </CardHeader>
      <CardContent>
        {facet.options.map((option) => (
          <div
            key={`${facet.identifier}-${option.identifier}`}
            className="items-top flex py-1 space-x-2"
          >
            <Checkbox
              checked={selectedValues.some(
                (val) => val.identifier === option.identifier
              )}
              onCheckedChange={(checked) =>
                toggleFilterValue(option, checked as boolean)
              }
              id={`${facet.identifier}-${option.identifier}`}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={`${facet.identifier}-${option.identifier}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option.displayValue} ({option.productCount})
              </label>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default FacetSelect

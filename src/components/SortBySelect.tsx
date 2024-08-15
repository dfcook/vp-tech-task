'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components//ui/label'
import useProductSearchParams from '@/lib/useProductSearchParams'

const SortBySelect = () => {
  const { selectedValue, onValueChange } = useProductSearchParams('sb', '1')

  return (
    <div className="max-w-80">
      <Label className="text-md font-normal">Sort By</Label>
      <Select value={selectedValue} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a verified email to display" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Recommended</SelectItem>
          <SelectItem value="2">Lowest Price</SelectItem>
          <SelectItem value="3">Highest Price</SelectItem>
          <SelectItem value="4">Highest Discount</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortBySelect

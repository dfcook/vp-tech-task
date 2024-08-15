import { Brand } from '@/types'
import Image from 'next/image'

export interface BrandImageProps {
  brand: Brand
}

const ProductImage = ({ brand }: BrandImageProps) => {
  return (
    <Image
      src={brand.brandImage.url}
      alt={brand.brandImage.attributes?.imageAltText}
      width={60}
      height={20}
    />
  )
}

export default ProductImage

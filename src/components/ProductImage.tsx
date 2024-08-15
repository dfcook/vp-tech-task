import { Product } from '@/types'
import Image from 'next/image'

export interface ProductImageProps {
  product: Product
}

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <Image
      src={product.image.url}
      alt={product.image.attributes?.imageAltText}
      width={280}
      height={280}
    />
  )
}

export default ProductImage

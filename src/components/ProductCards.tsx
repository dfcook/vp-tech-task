import { Product } from '@/types'
import { FC } from 'react'
import ProductCard from './ProductCard'

export interface ProductCardsProps {
  products: Product[]
}

const ProductCards: FC<ProductCardsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductCards

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import getSymbolFromCurrency from 'currency-symbol-map'
import { Product } from '@/types'
import { FC } from 'react'
import ProductImage from './ProductImage'
import BrandImage from './BrandImage'
import { SquareCheck, Star } from 'lucide-react'

export interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="border-0 rounded shadow-none max-w-64">
      <CardHeader>
        <ProductImage product={product} />
      </CardHeader>
      <CardContent>
        <BrandImage brand={product.brand} />
        <CardTitle className="text-sm py-1">{product.productName}</CardTitle>
        <CardDescription>
          <span className="text-red-600 font-bold text-lg py-1 block">
            {getSymbolFromCurrency(product.price.currencyCode)}
            {product.price.priceIncTax}
          </span>

          {product.stockStatus.status === 'G' && (
            <>
              <SquareCheck className="inline" size={16} color="green" />
              <span className="text-xs px-1">In Stock</span>
            </>
          )}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {product.reviewsCount > 0 && (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={`${
                  i < Math.floor(product.averageRating) ? '#FF960B' : 'gray'
                }`}
                color={`${
                  i < Math.floor(product.averageRating) ? '#FF960B' : 'gray'
                }`}
              />
            ))}
            <span className="text-sm px-2">{product.reviewsCount}</span>
          </>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProductCard

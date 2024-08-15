import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Product } from '@/types'
import { FC } from 'react'
import ProductImage from './ProductImage'
import BrandImage from './BrandImage'

export interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="border-0 rounded shadow-none">
      <CardHeader>
        <ProductImage product={product} />
      </CardHeader>
      <CardContent>
        <BrandImage brand={product.brand} />
        <CardTitle className="text-md">{product.productName}</CardTitle>
        <CardDescription>
          {product.price.currencyCode} {product.price.priceIncTax}
          {product.stockStatus.status}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {product.averageRating} {product.reviewsCount}
      </CardFooter>
    </Card>
  )
}

export default ProductCard

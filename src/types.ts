type Pagination = {
  from: number
  size: number
  total: number
  sortType: SortType
}

type FacetOptionValue =
  | {
      gte: number
      lte: number
    }
  | string

type FacetOption = {
  identifier: string
  value: FacetOptionValue
  displayValue: string
  productCount: number
  priority: number
}

type Facet = {
  identifier: string
  displayName: string
  priority: number
  facetType: number
  options: FacetOption[]
}

export type Product = {
  id: string
  legacyId: string
  legacyVariantId: string
  cultureCode: string
  isDefaultVariant: boolean
  sku: string
  productName: string
  slug: string
  averageRating: number
  reviewsCount: number
  questionsCount: number
  image: Image
  stockStatus: {
    status: string
  }
  price: ProductPrice
  attributes: ProductAttributes
  defaultCategory: ProductCategory
  brand: Brand
  score: number
}

type Image = {
  externalId: string
  url: string
  priority: number
  isDefault: boolean
  attributes: {
    imageAltText: string
  }
}

type ProductPrice = {
  currencyCode: string
  priceIncTax: number
  priceExcTax: number
  isOnPromotion: boolean
}

type ProductAttributes = {
  isApproved: boolean
  isShownOnTv: boolean
  isBestSeller: boolean
  isFreeWaste: boolean
  isPremium: boolean
  isRecommended: boolean
  isTrayIncluded: boolean
  isBluetoothIncluded: boolean
  isBatteryIncluded: boolean
  isAntiSlipIncluded: boolean
  isShortProjection: boolean
  hasOneOutlet: boolean
  hasTwoOutlets: boolean
  hasThreeOutlets: boolean
  isWaterProof: boolean
  isNew: boolean
  hasMoreOptions: boolean
}

type ProductCategory = {
  externalId: string
  slug: string
  name: string
  isDefault: boolean
  ancestors: ProductCategoryAncestor[]
}

type ProductCategoryAncestor = {
  slug: string
  externalId: string
  name: string
  depth: number
}

export type Brand = {
  externalId: string
  slug: string
  name: string
  brandImage: Image
}

export enum SortType {
  Recommended = 1,
  PriceLowToHigh = 2,
  PriceHighToLow = 3,
  LargestDiscount = 4,
}

export type ApiResponse = {
  pagination: Pagination
  facets: Facet[]
  products: Product[]
}

export type ApiRequest = {
  query: string
  pageNumber: number
  size: number
  additionalPages: number
  sort: SortType
}

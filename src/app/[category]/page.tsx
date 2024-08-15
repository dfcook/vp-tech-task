import ProductCards from '@/components/ProductCards'
import { fetchProducts } from '@/services/ProductService'

const Home = async ({ params }: { params: { category: string } }) => {
  const results = await fetchProducts({
    query: params.category,
    pageNumber: 0,
    size: 30,
    additionalPages: 0,
    sort: 1,
  })

  return (
    <main className="bg-gray-300 p-3">
      <ProductCards products={results.products} />
    </main>
  )
}

export default Home

import FacetSelect from '@/components/FacetSelect'
import LoadMoreButton from '@/components/LoadMoreButton'
import ProductCards from '@/components/ProductCards'
import SortBySelect from '@/components/SortBySelect'
import ClearFiltersButton from '@/components/ClearFiltersButton'
import { urlToQuery } from '@/lib/url'
import { fetchProducts } from '@/services/ProductService'

const Home = async ({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams?: Record<string, string>
}) => {
  const apiRequest = urlToQuery(
    params.category,
    new URLSearchParams(searchParams ?? {})
  )
  const results = await fetchProducts(apiRequest)

  return (
    <main className="p-3 flex gap-4 mx-auto max-w-6xl">
      <div className="flex flex-col py-2 gap-y-4">
        <h3>Filters</h3>
        <ClearFiltersButton
          filterCount={Object.keys(results.appliedFacets ?? {}).length}
        />
        {results.facets.map((facet) => (
          <FacetSelect key={facet.identifier} facet={facet} />
        ))}
      </div>
      <div>
        <div className="flex justify-between py-2">
          <SortBySelect />
          <h2 className="text-center">{results.pagination.total} results</h2>
        </div>
        <ProductCards products={results.products} />
        <div className="w-100 flex py-2 justify-center">
          <p className="px-4">
            You&apos;ve viewed {results.pagination.size} of{' '}
            {results.pagination.total}
          </p>
          <LoadMoreButton
            viewed={results.pagination.size}
            totalResults={results.pagination.total}
          />
        </div>
      </div>
    </main>
  )
}

export default Home

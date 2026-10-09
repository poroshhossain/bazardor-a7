import ProductDetails from "@/components/Products/ProductDetails"
import LoddingSpinner from "@/components/shared/Spinner"
import { Suspense } from "react"


interface ProductDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  return (
    <>
      <Suspense fallback={<LoddingSpinner />}>
        <ProductDetails  params={params}/>
      </Suspense>
    </>
  )
}
export default ProductDetailsPage
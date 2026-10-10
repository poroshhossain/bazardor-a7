import ProductDetails from "@/components/Products/ProductDetails"
import SkeletonProductDetailsPage from "@/components/Products/ProductSkeleton"
import { Suspense } from "react"


interface ProductDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  return (
    <>
      <Suspense fallback={<SkeletonProductDetailsPage />}>
        <ProductDetails params={params} />
      </Suspense>
    </>
  )
}
export default ProductDetailsPage
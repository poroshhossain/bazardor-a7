import CategoryComponents from "@/components/Category/CategoryComponents"
import CategorySkeleton from "@/components/shared/CategorySkeleton"
import { Suspense } from "react"

type CategoryWisePageProp = {
  params: Promise<{
    slug: string
  }>
}
const CategoryWisePage = async ({ params }: CategoryWisePageProp) => {
  return (
    <>
      <Suspense fallback={<CategorySkeleton />}>
        <CategoryComponents params={params} />
      </Suspense>
    </>
  )
}
export default CategoryWisePage
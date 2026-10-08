import CategoryComponents from "@/components/Category/CategoryComponents"
import LoddingSpinner from "@/components/shared/Spinner"
import { Suspense } from "react"

type CategoryWisePageProp = {
  params: Promise<{
    slug: string
  }>
}
const CategoryWisePage = async ({ params }: CategoryWisePageProp) => {
  return (
    <>
      <Suspense fallback={<LoddingSpinner />}>
        <CategoryComponents params={params} />
      </Suspense>
    </>
  )
}
export default CategoryWisePage
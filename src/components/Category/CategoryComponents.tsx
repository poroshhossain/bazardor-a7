
import { getCategoryApi, getCategorySpesificApi } from "@/api/api";
import { IMenuCategoryType } from "@/type/menuType";
import ProductCard from "../Products/ProductCard";
import { IProductType } from "@/type/type";
import Sorting from "./Sorting";

type CCProp = {
    params: Promise<{
        slug: string
    }>
}

const CategoryComponents = async ({ params }: CCProp) => {
    const { slug } = await params;

    const categoryData: IProductType[] = await getCategorySpesificApi(slug);
    // console.log('categoryData', categoryData)

    // find Category
    const allCategoryData: IMenuCategoryType[] = await getCategoryApi();
    const findCategory = allCategoryData.find(C => C.slug === slug);

    // console.log(findCategory)

    // sorting



    return (
        <section className="bg-bgColor py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex bg-cLight px-4 py-6 rounded-2xl items-center gap-3">
                    <p className="text-3xl">{findCategory?.icon}</p>
                    <div className="border-l border-l-shadoColor p-3">
                        <h1 className="">{findCategory?.nameBn}</h1>
                        <p>{categoryData.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-3 bg-cLight rounded-2xl p-2 mt-6">
                    <h3>সাজান</h3>
                    <Sorting />
                </div>
                <div className="">
                    <h2>মোট {categoryData.length}টি পণ্য দেখানো হচ্ছে</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {
                            categoryData.map(item => <ProductCard key={item.id} item={item} />)
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
export default CategoryComponents
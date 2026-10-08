
import { getCategoryApi, getCategorySpesificApi } from "@/api/api";
import { IMenuCategoryType } from "@/type/menuType";
import { IProductType } from "@/type/type";
import SortComponent from "./SortComponent";

type CCProp = {
    params: Promise<{
        slug: string
    }>
}

const CategoryComponents = async ({ params }: CCProp) => {
    const { slug } = await params;
    const categoryData: IProductType[] = await getCategorySpesificApi(slug);

    // find Category
    const allCategoryData: IMenuCategoryType[] = await getCategoryApi();
    const findCategory = allCategoryData.find(C => C.slug === slug);


    return (
        <section className="bg-bgColor py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex bg-cLight px-4 py-6 rounded-2xl items-center gap-3">
                    <p className="text-3xl">{findCategory?.icon}</p>
                    <div className="border-l border-l-shadoColor p-3">
                        <h1 className="text-cPrimary font-bold text-2xl">{findCategory?.nameBn}</h1>
                        <p className="text-[14px]">{categoryData.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>

                <SortComponent categoryData={categoryData}/>

            </div>
        </section>
    )
}
export default CategoryComponents
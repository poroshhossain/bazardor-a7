import { getAllProductsApi } from "@/api/api";
import { IProductType } from "@/type/type";
import ProductCard from "./ProductCard";

const AllProducts = async() => {
    const allProducts: IProductType[] = await getAllProductsApi();
    return (
        <section id="all_products" className="max-w-7xl mx-auto px-4 py-4">
            <h2 className="flex items-center gap-1 text-[18px] font-bold text-cPrimary pt-3">সব পণ্য</h2>
            <p className="text-[14px] text-cForeground/50 pb-3">মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    allProducts.map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </section>
    )
}
export default AllProducts
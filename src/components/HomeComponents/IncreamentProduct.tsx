import { getAllProductsApi } from "@/api/api"
import { IProductType } from "@/type/type";
import ProductCard from "../Products/ProductCard";
import { RxTriangleUp } from "react-icons/rx";

const IncreamentProduct = async () => {
    const allProducts: IProductType[] = await getAllProductsApi();
    const increaseProduct = allProducts.filter(pd => pd.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct);

    return (
        <section className="max-w-7xl mx-auto px-4">
            <h2 className="flex items-center gap-1 text-[18px] font-bold text-cForeground py-2"> <span className="text-red-500"><RxTriangleUp /></span> আজ দাম বেড়েছে</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    increaseProduct.slice(0, 6).map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </section>
    )
}
export default IncreamentProduct
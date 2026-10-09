import { getAllProductsApi } from "@/api/api";
import { IProductType } from "@/type/type";
import { RxTriangleUp } from "react-icons/rx";
import ProductCard from "../Products/ProductCard";

const DecreamentProduct = async() => {
    const allProducts: IProductType[] = await getAllProductsApi();
        const increaseProduct = allProducts.filter(pd => pd.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct);
    return (
        <section className="max-w-7xl mx-auto px-4 py-2">
            <h2 className="flex items-center gap-1 text-[18px] font-bold text-cForeground py-2"> <span className="text-cPrimary"><RxTriangleUp /></span> আজ দাম কমেছে</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    increaseProduct.slice(0, 6).map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </section>
    )
}
export default DecreamentProduct
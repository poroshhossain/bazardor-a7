import { getAllProductsApi } from "@/api/api";
import { IProductType } from "@/type/type";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const Marque = async () => {
    const marqueData: IProductType[] = await getAllProductsApi();
    console.log(marqueData)
    return (
        <div className="py-1 overflow-hidden">
            <Marquee speed={60} pauseOnHover>

                <ul className="flex items-center gap-1">
                    {
                        marqueData.map(item => {
                            const isUp = item.change.dir === 'up';
                            const isdown = item.change.dir === 'down';

                            return (
                                <li key={item.id}> <Link href={`/products/${item.slug}`} className="flex items-center gap-2 font-medium text-[12px] hover:bg-cPrimary/30 py-1 px-2 rounded-[5px]"> <span>{item.image}</span> {item.nameBn} <span>tk/{item.unit}</span> <span className={`${isUp?'text-red-500': isdown?'text-cPrimary' :'' }`}>{item.change.pct}%</span> </Link> </li>
                            )
                        })
                    }
                </ul>
            </Marquee>

        </div>
    )
}
export default Marque
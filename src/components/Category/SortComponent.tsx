"use client"

import { IProductType } from "@/type/type"
import Sorting from "./Sorting"
import ProductCard from "../Products/ProductCard"
import { useState } from "react"
interface SortComponentProps {
    categoryData: IProductType[]
}
const SortComponent = ({ categoryData }: SortComponentProps) => {
    const [sort, setSort] = useState<string | null>('default');

    const sortedProduct = [...categoryData].sort((a , b) => {
        if (sort === 'price-asc') {
            return a.today - b.today
        }
        if (sort === 'price-dasc') {
            return b.today - a.today
        }
        return 0
    })

    return (
        <>
            <div className="flex justify-end items-center gap-3 bg-cLight rounded-2xl p-2 mt-6">
                <h3>সাজান</h3>
                <Sorting sort={sort} setSort={setSort} />
            </div>
            <div className="py-4">
                <h2 className="text-cForeground text-[14px] py-3">মোট {sortedProduct.length}টি পণ্য দেখানো হচ্ছে</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {
                        sortedProduct.map(item => <ProductCard key={item.id} item={item} />)
                    }
                </div>
            </div>
        </>
    )
}
export default SortComponent
import { IProductType } from "@/type/type"
import Link from "next/link"
import { RxTriangleDown, RxTriangleRight, RxTriangleUp } from "react-icons/rx"

interface ProductProps {
    item: IProductType
}

const ProductCard = ({ item }: ProductProps) => {
    const isUp = item.change.dir === "up"
    const isDown = item.change.dir === "down"

    return (
        <article className="group overflow-hidden rounded-2xl border border-shadoColor bg-cLight shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Link href={`/product/${item.slug}`} className="block p-5">

                {/* Product Header */}
                <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-bgColor text-4xl">
                        {item.image}
                    </div>

                    <div className="min-w-0 flex-1">
                        <h2 className="truncate text-lg font-bold text-cForeground">
                            {item.nameBn}
                        </h2>

                        <div className="mt-1 flex items-center gap-2">
                            <span className="text-sm text-cForeground/60">
                                {item.categoryNameBn}
                            </span>

                            <span className="text-cForeground/30">•</span>

                            <span className="text-sm text-cForeground/60">
                                প্রতি {item.unit}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-shadoColor" />

                {/* Price Section */}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-sm text-cForeground/60">
                            আজকের দাম
                        </p>

                        <h3 className="mt-1 text-3xl font-bold tracking-tight text-cPrimary">
                            ৳{item.today}
                        </h3>
                    </div>

                    {/* Change */}
                    <div
                        className={`rounded-xl px-3 py-2 text-center ${
                            isUp
                                ? "bg-red-50 text-red-600"
                                : isDown
                                  ? "bg-green-50 text-cPrimary"
                                  : "bg-bgColor text-cForeground/60"
                        }`}
                    >
                        <p className="text-xs font-medium">
                            গতকাল
                        </p>

                        <p className="mt-0.5 text-sm font-bold flex items-center">
                            {isUp ? <RxTriangleUp /> : isDown ? <RxTriangleDown /> : <RxTriangleRight />}{" "}
                            {item.change.pct}%
                        </p>
                    </div>
                </div>

                {/* Yesterday Price */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-bgColor px-4 py-3">
                    <span className="text-sm text-cForeground/60">
                        গতকালের দাম
                    </span>

                    <span className="font-semibold text-cForeground">
                        ৳{item.yesterday}
                    </span>
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-cForeground/60">
                        বাজারদর দেখুন
                    </span>

                    <span className="font-semibold text-cPrimary transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard
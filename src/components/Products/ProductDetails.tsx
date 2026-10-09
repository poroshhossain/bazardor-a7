import { getAllProductsApi } from "@/api/api";
import { IMarketType, IProductType } from "@/type/type";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RxTriangleDown, RxTriangleRight, RxTriangleUp } from "react-icons/rx";
import { TfiAngleRight } from "react-icons/tfi";
import { ProductTable } from "./ProductTable";

interface ProductDetailsProps {
    params: Promise<{
        slug: string
    }>
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const { slug } = await params;

    const allProducts: IProductType[] = await getAllProductsApi();
    const currentProduct = allProducts.find(item => item.slug === slug);
    if (!currentProduct) {
        return notFound();
    }
    const difference = currentProduct?.today - currentProduct?.yesterday;


    const isUp = currentProduct.change.dir === "up"
    const isDown = currentProduct.change.dir === "down"


    const markets = currentProduct.markets ?? [];


    const MinPrice = Math.min(...markets.map(market => market.min));
    const MaxPrice = Math.max(...markets.map(market => market.max));
    const averagePrice = Math.round(markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) / markets.length)

    return (
        <section>
            <div className="max-w-7xl mx-auto py-4">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[12px] py-3">
                    <Link href="/">হোম</Link>

                    <span><TfiAngleRight /></span>

                    <Link href={`/category/${currentProduct.category}`}>
                        {currentProduct.category}
                    </Link>

                    <span><TfiAngleRight /></span>

                    <span aria-current="page">
                        {currentProduct.nameBn}
                    </span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-cLight p-4">
                    {/* Product Information */}
                    <div className="flex min-w-0 items-start gap-3">
                        <span className="shrink-0 text-2xl" aria-hidden="true">
                            {currentProduct?.categoryIcon}
                        </span>

                        <div className="min-w-0">
                            <h2 className="font-semibold text-cForeground">
                                {currentProduct?.nameBn}
                            </h2>

                            <p className="mt-1 text-sm text-cForeground/60">
                                {currentProduct?.unit} · {currentProduct?.categoryNameBn}
                            </p>

                            <p
                                className={`mt-2 text-sm ${difference > 0
                                    ? "text-red-600"
                                    : difference < 0
                                        ? "text-cPrimary"
                                        : "text-cForeground/50"
                                    }`}
                            >
                                {difference > 0
                                    ? `↗ গতকালের তুলনায় আজ দাম বেড়েছে · ${difference} টাকা`
                                    : difference < 0
                                        ? `↘ গতকালের তুলনায় আজ দাম কমেছে · ${Math.abs(difference)} টাকা`
                                        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
                            </p>
                        </div>
                    </div>

                    {/* Today's Price */}
                    <div className="shrink-0 rounded-2xl bg-shadoColor px-4 py-3 text-center">
                        <p className="text-sm text-cForeground/60">আজকের দাম</p>

                        <h3 className="text-2xl font-bold text-cForeground">
                            {currentProduct?.today}
                        </h3>

                        <p className="text-sm text-cForeground/60">
                            টাকা / {currentProduct?.unit}
                        </p>

                        {/* Price Change Percentage */}
                        <div
                            className={`mt-2 flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-sm font-bold ${isUp
                                ? "bg-red-50 text-red-600"
                                : isDown
                                    ? "bg-green-50 text-cPrimary"
                                    : "bg-bgColor text-cForeground/60"
                                }`}
                        >
                            {isUp ? (
                                <RxTriangleUp aria-hidden="true" />
                            ) : isDown ? (
                                <RxTriangleDown aria-hidden="true" />
                            ) : (
                                <RxTriangleRight aria-hidden="true" />
                            )}

                            <span>{currentProduct?.change?.pct}%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-cLight py-3 mt-6 mb-10 rounded-2xl mx-2">
                    {/* দামের সারসংক্ষেপ */}
                    <h3 className="text-[16px] font-bold text-cForeground/50 py-3 px-2" >দামের সারসংক্ষেপ</h3>
                    <div className=" px-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-cBorder bg-cLight p-5">
                            <p className="text-sm text-cForeground/60">
                                সর্বনিম্ন দাম
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-cPrimary">
                                ৳{MinPrice}
                            </h3>
                            <p className="mt-1 text-xs text-cForeground/50">
                                প্রতি {currentProduct.unit}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-cBorder bg-cLight p-5">
                            <p className="text-sm text-cForeground/60">
                                সর্বোচ্চ দাম
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-red-600">
                                ৳{MaxPrice}
                            </h3>
                            <p className="mt-1 text-xs text-cForeground/50">
                                প্রতি {currentProduct.unit}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-cBorder bg-cLight p-5">
                            <p className="text-sm text-cForeground/60">
                                গড় দাম
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-cPrimary">
                                ৳{averagePrice}
                            </h3>
                            <p className="mt-1 text-xs text-cForeground/50">
                                প্রতি {currentProduct.unit}
                            </p>
                        </div>
                    </div>
                    {/* বাজারভিত্তিক আজকের দাম */}
                    <div className="py-3 px-4 ">
                        <h3 className="text-[16px] font-bold text-cForeground/50 py-3 px-2">বাজারভিত্তিক আজকের দাম</h3>
                        <ProductTable markets={markets} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductDetails
export default function SkeletonProductDetailsPage() {
    return (
        <section className="animate-pulse">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb Skeleton */}
                <div className="flex items-center gap-2 py-3">
                    <div className="h-3 w-10 rounded bg-cBorder/50" />
                    <div className="h-3 w-2 rounded bg-cBorder/50" />
                    <div className="h-3 w-20 rounded bg-cBorder/50" />
                    <div className="h-3 w-2 rounded bg-cBorder/50" />
                    <div className="h-3 w-28 rounded bg-cBorder/50" />
                </div>

                {/* Product Information & Today's Price */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl bg-cLight p-4">
                    {/* Product Information */}
                    <div className="flex min-w-0 items-start gap-3">
                        {/* Category Icon */}
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-cBorder/50" />

                        <div className="min-w-0 flex-1 space-y-3">
                            {/* Product Name */}
                            <div className="h-5 w-40 max-w-full rounded bg-cBorder/50" />

                            {/* Unit & Category */}
                            <div className="h-4 w-32 max-w-full rounded bg-cBorder/50" />

                            {/* Price Difference */}
                            <div className="h-4 w-56 max-w-full rounded bg-cBorder/50" />
                        </div>
                    </div>

                    {/* Today's Price */}
                    <div className="w-full shrink-0 rounded-2xl bg-shadoColor px-4 py-3 text-center sm:w-40">
                        <div className="mx-auto h-4 w-20 rounded bg-cBorder/50" />

                        <div className="mx-auto mt-3 h-8 w-24 rounded bg-cBorder/50" />

                        <div className="mx-auto mt-2 h-4 w-20 rounded bg-cBorder/50" />

                        {/* Percentage Badge */}
                        <div className="mx-auto mt-3 h-9 w-24 rounded-xl bg-cBorder/50" />
                    </div>
                </div>

                {/* Price Summary */}
                <div className="mx-2 mt-6 mb-10 rounded-2xl bg-cLight py-3">
                    <div className="px-2 py-3">
                        <div className="h-5 w-36 rounded bg-cBorder/50" />
                    </div>

                    {/* Min, Max & Average Price */}
                    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-cBorder bg-cLight p-5"
                            >
                                <div className="h-4 w-24 rounded bg-cBorder/50" />

                                <div className="mt-3 h-8 w-28 rounded bg-cBorder/50" />

                                <div className="mt-2 h-3 w-20 rounded bg-cBorder/50" />
                            </div>
                        ))}
                    </div>

                    {/* Market-wise Price Table */}
                    <div className="px-4 py-3">
                        <div className="mb-4 h-5 w-48 max-w-full rounded bg-cBorder/50" />

                        <div className="overflow-hidden rounded-xl border border-cBorder">
                            {/* Table Header */}
                            <div className="grid grid-cols-3 gap-4 border-b border-cBorder p-4">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="h-4 rounded bg-cBorder/50"
                                    />
                                ))}
                            </div>

                            {/* Table Rows */}
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 gap-4 border-b border-cBorder p-4 last:border-b-0"
                                >
                                    <div className="h-4 w-24 max-w-full rounded bg-cBorder/50" />
                                    <div className="h-4 w-16 max-w-full rounded bg-cBorder/50" />
                                    <div className="h-4 w-20 max-w-full rounded bg-cBorder/50" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
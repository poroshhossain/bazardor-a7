export default function SkeletonIncreaseProducts() {
    return (
        <section className="max-w-7xl mx-auto px-4 animate-pulse">
            {/* Section Heading */}
            <h2 className="flex items-center gap-1 py-2">
                <div className="h-5 w-5 rounded bg-cBorder/50" />
                <div className="h-5 w-32 rounded bg-cBorder/50" />
            </h2>

            {/* Product Cards Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-cBorder bg-cLight p-4"
                    >
                        {/* Product Info */}
                        <div className="flex items-start gap-3">
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-cBorder/50" />

                            <div className="min-w-0 flex-1 space-y-2">
                                <div className="h-4 w-3/4 rounded bg-cBorder/50" />
                                <div className="h-3 w-1/2 rounded bg-cBorder/50" />
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="space-y-2">
                                <div className="h-3 w-16 rounded bg-cBorder/50" />
                                <div className="h-6 w-24 rounded bg-cBorder/50" />
                            </div>

                            <div className="h-8 w-20 rounded-xl bg-cBorder/50" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
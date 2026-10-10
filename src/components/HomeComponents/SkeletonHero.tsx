export default function SkeletonHero() {
    return (
        <section>
            <div className="mx-auto my-4 grid max-w-7xl grid-cols-1 gap-5 overflow-hidden rounded-2xl bg-cLight px-4 py-4 sm:px-6 sm:py-6 md:grid-cols-2 md:items-center md:gap-8 lg:gap-10 lg:px-8 animate-pulse">

                {/* Hero Content Skeleton */}
                <div className="min-w-0 py-2">
                    {/* Date */}
                    <div className="mb-4 h-6 w-28 rounded-full bg-cBorder/50" />

                    {/* Title */}
                    <div className="space-y-3 pb-4 pt-1">
                        <div className="h-7 w-full max-w-md rounded bg-cBorder/50 sm:h-9 lg:h-10 xl:h-12" />
                        <div className="h-7 w-3/4 max-w-sm rounded bg-cBorder/50 sm:h-9 lg:h-10 xl:h-12" />
                    </div>

                    {/* Description */}
                    <div className="space-y-2 pb-5">
                        <div className="h-4 w-full max-w-md rounded bg-cBorder/50" />
                        <div className="h-4 w-5/6 max-w-sm rounded bg-cBorder/50" />
                        <div className="h-4 w-2/3 max-w-xs rounded bg-cBorder/50" />
                    </div>

                    {/* Button */}
                    <div className="h-10 w-32 rounded-[10px] bg-cBorder/50" />
                </div>

                {/* Hero Image Skeleton */}
                <div className="h-56 w-full rounded-xl bg-cBorder/50 sm:h-72 md:h-80 lg:h-96" />

            </div>
        </section>
    );
}
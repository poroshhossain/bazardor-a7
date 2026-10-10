
import Skeleton from "@/components/ui/skeleton";

export default function CategorySkeleton() {
  return (
    <section className="bg-bgColor py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Header Skeleton */}
        <div className="flex items-center gap-3 rounded-2xl bg-cLight px-4 py-6">
          <Skeleton className="h-10 w-10 rounded-lg" />

          <div className="flex-1 space-y-2 border-l border-l-shadoColor p-3">
            <Skeleton className="h-7 w-48 max-w-full" />
            <Skeleton className="h-4 w-64 max-w-full" />
          </div>
        </div>

        {/* Sorting Skeleton */}
        <div className="mt-6 flex items-center justify-end gap-3 rounded-2xl bg-cLight p-2">
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-10 w-40 max-w-[60%] rounded-lg" />
        </div>

        {/* Product Count Skeleton */}
        <div className="py-4">
          <Skeleton className="mb-3 h-5 w-56 max-w-full" />

          {/* Product Grid Skeleton */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-shadoColor/30 bg-cLight p-4"
              >
                {/* Product Image */}
                <Skeleton className="h-40 w-full rounded-xl" />

                {/* Product Name */}
                <div className="mt-4 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>

                {/* Price and Actions */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <Skeleton className="h-9 w-2/5" />

                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-10" />
                    <Skeleton className="h-8 w-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
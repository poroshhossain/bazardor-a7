import DecreamentProduct from "@/components/HomeComponents/DecreamentProduct";
import Hero from "@/components/HomeComponents/Hero";
import IncreamentProduct from "@/components/HomeComponents/IncreamentProduct";
import SkeletonHero from "@/components/HomeComponents/SkeletonHero";
import SkeletonIncreaseProducts from "@/components/HomeComponents/SkeletonIncreaseProducts";
import AllProducts from "@/components/Products/AllProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<SkeletonHero/>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SkeletonIncreaseProducts/>}>
        <IncreamentProduct />
      </Suspense>

      <Suspense fallback={<SkeletonIncreaseProducts/>}>
        <DecreamentProduct />
      </Suspense>

      <Suspense fallback={<SkeletonIncreaseProducts/>}>
        <AllProducts />
      </Suspense>
    </>
  );
}

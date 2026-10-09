import DecreamentProduct from "@/components/HomeComponents/DecreamentProduct";
import Hero from "@/components/HomeComponents/Hero";
import IncreamentProduct from "@/components/HomeComponents/IncreamentProduct";
import AllProducts from "@/components/Products/AllProducts";
import LoddingSpinner from "@/components/shared/Spinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoddingSpinner/>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoddingSpinner/>}>
        <IncreamentProduct />
      </Suspense>

      <Suspense fallback={<LoddingSpinner/>}>
        <DecreamentProduct />
      </Suspense>

      <Suspense fallback={<LoddingSpinner/>}>
        <AllProducts />
      </Suspense>
    </>
  );
}

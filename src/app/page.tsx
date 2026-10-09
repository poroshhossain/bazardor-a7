import Hero from "@/components/HomeComponents/Hero";
import LoddingSpinner from "@/components/shared/Spinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoddingSpinner/>}>
        <Hero />
      </Suspense>
    </>
  );
}

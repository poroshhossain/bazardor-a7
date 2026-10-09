import { Suspense } from "react"
import HeaderTop from "./HeaderTop"
import Navber from "./Navber"
import LoddingSpinner from "../shared/Spinner"
import Marque from "../shared/Marque"

const Header = () => {
  return (
    <header>
      <Suspense fallback={<LoddingSpinner/>}>
        <HeaderTop />
      </Suspense>
      <Suspense fallback={<LoddingSpinner />}>
        <Navber />
      </Suspense>
      <Suspense fallback={<LoddingSpinner />}>
        <Marque />
      </Suspense>
    </header>
  )
}
export default Header
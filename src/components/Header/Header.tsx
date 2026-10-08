import { Suspense } from "react"
import HeaderTop from "./HeaderTop"
import Navber from "./Navber"
import LoddingSpinner from "../shared/Spinner"

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <Suspense fallback={<LoddingSpinner/> }>
        <Navber />
      </Suspense>
    </header>
  )
}
export default Header
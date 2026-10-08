import Link from "next/link"
import CurrentDate from "./CurrentDate"
import Image from "next/image"

const MainLogo = () => {
    return (
        <Link href={'/'} className="flex items-center gap-2">
            <span className="p-3 bg-cPrimary rounded-2xl">
                <Image src={'/logo-icon.png'} alt="main logo" width={25} height={25} className="" />
            </span>
            <div className=" flex flex-col justify-start leading-none">
                <span className="text-cPrimary text-[18px] font-bold">বাজার দর</span>
                <CurrentDate />
            </div>

        </Link>
    )
}
export default MainLogo
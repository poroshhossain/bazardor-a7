import Link from "next/link"
import HeaderAction from "./HeaderAction"
import Image from "next/image"
import CurrentDate from "../shared/CurrentDate"

const HeaderTop = () => {

    return (
        <div className="border-b border-b-shadoColor">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href={'/'} className="flex items-center gap-2">
                        <span className="p-3 bg-cPrimary rounded-2xl">
                            <Image src={'/logo-icon.png'} alt="main logo" width={25} height={25} className="" />
                        </span>
                        <div className=" flex flex-col justify-start leading-none">
                            <span className="text-cPrimary text-[18px] font-bold">বাজার দর</span>
                            <CurrentDate />
                        </div>

                    </Link>
                    {/* header Action */}
                    <HeaderAction />
                </div>
            </div>
        </div>
    )
}
export default HeaderTop
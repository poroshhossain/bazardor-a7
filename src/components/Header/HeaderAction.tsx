"use client"
import { Button } from "@heroui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HeaderAction = () => {
    const pathname = usePathname();
    return (
        <div className="flex items-center gap-2">
            <Link href='/sign-in'><Button variant="outline" className={`${pathname === '/sign-in' ? 'bg-cPrimary text-cLight' : ''} text-cForeground text-[14px] h-0 py-4 rounded-[10px] px-3 `} >সাইন ইন</Button> </Link>
            <Link href='/sign-up'><Button variant="outline" className={`${pathname === '/sign-up' ? 'bg-cPrimary text-cLight' : ''} text-cForeground text-[14px] h-0 py-4 rounded-[10px] px-3 `} >সাইন আপ</Button></Link>

        </div>
    )
}
export default HeaderAction
"use client"
import LogOutPage from "@/app/(auth)/logout/page"
import { authClient } from "@/lib/auth-client"
import { Button } from "@heroui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LoddingSpinner from "../shared/Spinner"

const HeaderAction = () => {
    const pathname = usePathname();

    const { data: session, isPending } = authClient.useSession();
    if (isPending) {
        return <LoddingSpinner/>;
    }
    return (
        <div className="flex items-center gap-2">
            {
                session?.user ? (
                    <>
                        <div className="">
                            <p>{session?.user?.name}</p>
                            <LogOutPage/>
                        </div>
                    </>
                ) : (
                    <>
                        <Link href='/sign-in'><Button variant="outline" className={`${pathname === '/sign-in' ? 'bg-cPrimary text-cLight' : ''} text-cForeground text-[14px] h-0 py-4 rounded-[10px] px-3 `} >সাইন ইন</Button> </Link>
                        <Link href='/sign-up'><Button variant="outline" className={`${pathname === '/sign-up' ? 'bg-cPrimary text-cLight' : ''} text-cForeground text-[14px] h-0 py-4 rounded-[10px] px-3 `} >সাইন আপ</Button></Link>

                    </>
                )
            }

        </div>
    )
}
export default HeaderAction
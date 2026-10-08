"use client"
import { Button } from "@heroui/react"
import Link from "next/link"
import { useState } from "react"

const HeaderAction = () => {
    const [active, setActive] = useState('signup');

    return (
        <div className="flex gap-3">
            <Link href={'#'}><Button variant="outline" onClick={() => setActive('signIn')} className={`${active === 'signIn' ? 'bg-cPrimary text-cLight' : ''} text-cForeground`} >সাইন ইন</Button> </Link>
            <Link href={'#'}><Button variant="outline" onClick={() => setActive('signup')} className={`${active === 'signup' ? 'bg-cPrimary text-cLight' : ''} text-cForeground`} >সাইন আপ</Button></Link>

        </div>
    )
}
export default HeaderAction
"use client"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LoddingSpinner from "../shared/Spinner"
import { Persons } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Logout from "../shared/Logout"


const HeaderAction = () => {
    const pathname = usePathname();

    const { data: session, isPending } = authClient.useSession();
    if (isPending) {
        return <LoddingSpinner />;
    }
    return (
        <div className="flex items-center gap-2">
            {
                session?.user ? (
                    <>

                        <Dropdown>
                            <Dropdown.Trigger className="flex items-center gap-2">
                                <Avatar size="md" className="rounded-[10px]">
                                    {session?.user?.image && (
                                        <Avatar.Image
                                            alt={session.user.name}
                                            src={session.user.image}
                                        />
                                    )}
                                    <Avatar.Fallback delayMs={600}>No photo</Avatar.Fallback>
                                </Avatar>
                                <h3 className="text-[14px] font-medium capitalize text-cPrimary">{session?.user?.name?.slice(0, 4)}...</h3>
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar size="sm" className="rounded-full ">
                                            {session.user.image && (
                                                <Avatar.Image
                                                    alt={session.user.name}
                                                    src={session.user.image}
                                                />
                                            )}
                                            <Avatar.Fallback delayMs={600}>No photo</Avatar.Fallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm leading-5 font-medium">{session?.user?.name}</p>
                                            <p className="text-xs leading-none text-muted">{session?.user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="profile" textValue="Profile">
                                        <Link href='/profile'>
                                            <Label className="flex items-center gap-2"> <Persons/> আমার প্রোফাইল </Label>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="logout" textValue="logout" className="text-center">
                                         <Logout/>
                                    </Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </>
                ) : (
                    <>
                        <Link href='/sign-in'><Button variant="outline" className={`${pathname === '/sign-in' ? 'bg-cPrimary text-cLight' : ''} text-cForeground text-[14px] h-0 py-4 rounded-[10px] px-3 `} >সাইন ইন</Button> </Link>
                        <Link href='/sign-up'><Button variant="outline" className={`${pathname === '/sign-up' ? 'bg-cPrimary text-cLight' : ''} text-cForeground text-[14px] h-0 py-4 rounded-[10px] px-3 `} >সাইন আপ</Button></Link>

                    </>
                )
            }

        </div >
    )
}
export default HeaderAction
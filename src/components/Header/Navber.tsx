"use client"

import { getCategoryApi } from "@/api/api";
import { IMenuCategoryType } from "@/type/menuType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  useEffect, useState } from "react";
import HeaderAction from "./HeaderAction";

const Navber = () => {
    const pathname = usePathname();
    const [menuItems, setMenu] = useState<IMenuCategoryType[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const navberCategory = async () => {
            try {
                const getNavberCategoryData = await getCategoryApi();
                setMenu(getNavberCategoryData)

            } catch (error) {
                console.error(error);
                setError(`${error}`);

            }
        }
        navberCategory()
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-b-shadoColor py-1">
            <div className="mx-auto max-w-7xl px-4">

                {/* Mobile Header */}
                <div className="flex justify-between py-1 md:hidden">
                    {/* Hamburger */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="flex items-center rounded-lg border border-shadoColor px-2 py-1"
                    >
                        <span className="text-[16px]">☰</span>
                    </button>

                    {/* Header Action */}
                    <HeaderAction />
                </div>

                {/* Mobile Overlay */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-cPrimary/40 md:hidden"
                    />
                )}

                {/* Menu */}
                <ul
                    className={`
                        fixed left-0 top-0 z-50
                        h-full w-1/2
                        flex-col gap-2
                        bg-cLight p-4 shadow-xl
                        transition-transform duration-300
                        md:static md:z-auto md:h-auto md:w-auto
                        md:flex md:flex-row md:items-center
                        md:bg-transparent md:p-0 md:shadow-none
                        ${isOpen
                            ? "translate-x-0 flex"
                            : "-translate-x-full md:translate-x-0"
                        }
                    `}
                >
                    {/* Mobile close button */}
                    <li className="mb-3 flex justify-end md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-shadoColor"
                        >
                            ✕
                        </button>
                    </li>

                    {error && <p>{error}</p>}

                    {menuItems.map((item) => (
                        <li key={item.id} className="list-none">
                            <Link
                                href={`/category/${item.slug}`}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    flex items-center gap-2
                                    rounded-lg px-3 py-2
                                    text-[16px] font-medium
                                    ${pathname === `/category/${item.slug}`
                                        ? "bg-cPrimary/75 text-cLight"
                                        : ""
                                    }
                                `}
                            >
                                <span>{item.icon}</span>
                                <span>{item.nameBn}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navber
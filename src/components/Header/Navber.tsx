"use client"

import { getCategoryApi } from "@/api/api";
import { IMenuCategoryType } from "@/type/menuType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b border-b-shadoColor py-1">
            <div className="max-w-7xl mx-auto px-4">
                {/* Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 rounded-lg border border-shadoColor px-4 py-2 md:hidden"
                >
                    <span className="text-lg">☰</span>
                    <span>Categories</span>
                </button>

                {/* Menu */}
                <ul
                    className={`mt-2 w-full flex-col gap-2 rounded-xl bg-cLight p-3 shadow-md ${isOpen ? "flex" : "hidden"
                        } md:flex md:flex-row md:items-center md:gap-4 md:bg-transparent md:p-0 md:shadow-none`}
                >
                    {error && <p>{error}</p>}

                    {menuItems?.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`/category/${item.slug}`}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${pathname === `/category/${item.slug}` ? 'bg-cPrimary text-cLight' :''}`}
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
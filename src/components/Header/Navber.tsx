"use client"

import { baseApiUrl } from "@/api/baseApiUrl"
import { IMenuCategoryType } from "@/type/menuType";
import Link from "next/link";
import { useEffect, useState } from "react";

const getNavberCategoryApi = async () => {
    const res = await fetch(`${baseApiUrl}/categories`);
    const data = await res.json();
    return data;
}

const Navber = () => {

    const [menuItems, setMenu] = useState<IMenuCategoryType[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const navberCategory = async () => {
            try {
                const getNavberCategoryData = await getNavberCategoryApi();
                setMenu(getNavberCategoryData)

            } catch (error) {
                console.error(error);
                setError(`Somithing is wrong`)
            }
        }
        navberCategory()
    }, []);
    console.log(menuItems)
    return (
        <nav className="border-b border-b-shadoColor py-1">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex list-none gap-4">
                    {
                        error && (
                            <p>{error}</p>
                        )
                    }
                    {
                        menuItems.map((item) => <li key={item.id}><Link href={`category/${item.slug}`}>{item.nameBn}</Link> </li>)
                    }
                </ul>

            </div>
        </nav>
    )
}
export default Navber
import { baseApiUrl } from "./baseApiUrl";

export const getAllProductsApi = async()=>{
    const res = await fetch(`${baseApiUrl}/products`);
    if(!res.ok){
        throw new Error(`Failed to fetch Products: ${res.status}`)
    }
    const data = await res.json();
    return data;
}

export const getCategoryApi = async () => {
    const res = await fetch(`${baseApiUrl}/categories`);
    if (!res.ok) {
        throw new Error(`Failed to fetch categories:) ${res.status}`);
    }
    const data = await res.json();
    return data;
}

export const getCategorySpesificApi = async (slug: string) => {
    const res = await fetch(`${baseApiUrl}/products?category=${slug}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch categories:) ${res.status}`);
    }
    const data = await res.json();
    return data
}
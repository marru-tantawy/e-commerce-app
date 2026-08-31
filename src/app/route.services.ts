import { Category } from "./_components/MainCategories/MainCategories"

export async function getAllcategories(): Promise<Category[]> {
        const Allcategories =  await fetch('https://ecommerce.routemisr.com/api/v1/categories')
        const dataaa = await Allcategories.json()
        return dataaa.data
    }

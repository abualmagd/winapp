import { mybase } from "./global";


export async function getAllCategories() {
    return await mybase.from('category').select('*').order('name', { ascending: true });
}
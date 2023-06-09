import { mybase } from "./global";




export async function getArticles() {
    return await mybase.from('articles').select('*').limit(7);
}


export async function getArticleById(id) {
    return await mybase.from('articles').select('*').eq('id', id);
}


export async function getRandomArticles(id) {
    return await mybase.from('articles').select('*').neq('id', id).limit(3);
}
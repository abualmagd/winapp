import { mybase } from "./global";




export async function getArticles() {
    return await mybase.from('articles').select('*').limit(7);
}


export async function getArticleById(id) {
    return await mybase.from('articles').select('*').eq('id', id);
}

export async function getArticleByTitle(title) {
    return await mybase.from('articles').select('*').eq('short_title', title);
}



export async function getRandomArticles(title) {
    return await mybase.from('articles').select('*').neq('short_title', title).limit(3);
}
import { mybase } from "./global";




export async function getArticles() {
    return await mybase.from('articles').select('*').order('created_at', { ascending: false }).limit(7);
}


export async function getArticleById(id) {
    return await mybase.from('articles').select('*').eq('id', id);
}

export async function getArticleByTitle(title) {
    return await mybase.from('articles').select('*').eq('title', title);
}

//get_article_short_title

export async function getArticleByShortTitle(t) {
    return await mybase.rpc('get_article_short_title', { 'shorttitle': t });
}

export async function getRandomArticles(title) {
    return await mybase.from('articles').select('*').neq('short_title', title).limit(3);
}


//search blogs?

export async function searchBlog(keyword) {
    await mybase
        .from('articles')
        .select('*')
        .ilike('title', `%${keyword}%`)
        .or('description', `%${keyword}%`);

}
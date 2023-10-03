import { mybase } from "./global";




export async function getArticles() {
    return await mybase.from('articles').select('*').order('created_at', { ascending: false }).limit(10).eq('published',true);
}


export async function getArticleById(id) {
    return await mybase.from('articles').select('*').eq('id', id);
}



export async function getArticleByTitle(title) {
    return await mybase.from('articles').select('*').eq('title', title);
}


//get article with author data 
export async function getArticleWithAuthor(shorttitle){
    return await mybase.rpc('get_article_with_author',{ 'short_title_param': shorttitle})
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
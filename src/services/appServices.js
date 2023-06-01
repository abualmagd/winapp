import { getToken, mybase } from "./global";
import { getLocalUser } from "./userServices";


export async function addNewApp(object) {
    return await mybase.from('apps').insert({
        object
    });

}


export async function getAppByName(appName) {

    return await mybase.from('apps').select("*").eq('app_name', appName)

}

export async function getAppById(appId) {

    return await mybase.from('apps').select("*").eq('id', appId);

}


export async function getHeighlyApps(ofset) {
    return await mybase.rpc('get_rand_apps', { 'myoffset': ofset });

}

export async function getNewApps() {
    return await mybase.from('apps').select('*').order("created_at", { ascending: false }).limit(10);
}


export async function getAPPInfo(appName) {
    const userId = getToken();
    return await mybase.rpc('get_app_inf', { 'appname': appName, 'userid': userId });
    //check parameters  names  small letter supabase perefer small letters only
}

export async function updateApp(updatedData, id) {
    return mybase.from('apps').update(updatedData).eq('id', id).select('*');
}


export async function deleteApp(id) {
    return mybase.from('apps').delete().eq('id', id);
}


export async function getUserSavedApps(userId) {
    return await mybase.rpc('get_bookmarked_apps', { 'userid': userId });
}

export async function bookmark(appId) {
    const { id } = getLocalUser();
    return await mybase.from('favorite').insert({ user_id: id, app_id: appId });

}

export async function unBookmark(appId) {
    const { id } = getLocalUser();
    return await mybase.from('favorite').delete().eq({ user_id: id, app_id: appId });

}


export async function getSuggestions(categoryId) {
    return await mybase.from('apps').select('*').eq('category_id', categoryId).limit(5);
}




export async function createReview(appId, content, userRating) {
    const { id, avatar_url, name } = getLocalUser();
    return await mybase.from('reviews').insert({
        app_id: appId,
        user_id: id,
        content: content,
        rating: userRating,
        creator_avatar_url: avatar_url,
        creator_name: name,
    }).select("*");
}

export async function getAppReviews(appId) {
    return await mybase.from('reviews').select('*').eq('app_id', appId).order("created_at", { ascending: false }).limit(20);

}

export async function getMoreReviews(appId, offset) {
    const end = offset + 20;
    return await mybase.from('reviews').select('*').eq('app_id', appId).order("created_at", { ascending: false }).range(offset, end);

}


export async function createReplay(reviewId, content) {
    const { id, avatar_url, name } = getLocalUser();
    return await mybase.from('replays').insert({
        review_id: reviewId,
        content: content,
        user_id: id,
        creator_avatar_url: avatar_url,
        creator_name: name,
    }).select("*");
}



export async function getReplaysforReview(reviewId) {

    return await mybase.from('replays').select('*').eq("review_id", reviewId).limit(10);

}


export async function createNewApp(newData) {
    return await mybase.from('apps').insert(newData).select('id');

}




export async function getAllCategory() {
    return await mybase.from('category').select('id,name');
}

export async function updateAppLogo(logoUrl, appId) {
    console.log('urls : ', appId + " " + logoUrl)
    return await mybase.from('apps').update({
        logo_url: logoUrl
    }).eq('id', appId);
}


export async function updateAppShot(shotUrl, appId) {
    console.log('urls : ', appId + " " + shotUrl)
    return await mybase.from('apps').update({
        shot_url: shotUrl
    }).eq('id', appId);
}

export async function getAppImages(id) {
    return await mybase.from('apps').select('logo_url,shot_url').eq('id', id);
}


export async function getUserApps() {
    const userId = getToken();
    //get_my_apps_details
    return await mybase.rpc('get_my_apps_details', { 'userid': userId });

}


export function convertStampToDate(stamp) {
    const timestamp = new Date(stamp); // create a Date object from the timestamp string
    const year = timestamp.getUTCFullYear(); // get the year (in UTC)
    const month = timestamp.getUTCMonth() + 1; // get the month (in UTC); add 1 because getUTCMonth returns 0-indexed values
    const day = timestamp.getUTCDate(); // get the day (in UTC)
    const date = `${year}-${month}-${day}`; // format the date as a string
    return date;
}


export async function searchApps(searchText, devices, priceModel, categoryId) {



    console.log('serchTerm', searchText);
    console.log('devices', devices);
    console.log('pricemodel', priceModel);
    console.log('categoryid', categoryId);
    //function search_apps_filter(keyword text,categoryid bigint, platforms text[],pricemodel text[])

    return mybase.rpc('search_apps_filter', {
        'keyword': searchText,
        'categoryid': categoryId,
        'platforms': devices,
        'pricemodel': priceModel
    });
}



export async function getPlans() {
    return await mybase.from('plans').select('*');
}


export async function reportApp(appId, content) {
    const { id } = getLocalUser();
    return await mybase.from('app_reports').insert({
        app_id: appId,
        user_id: id,
        content: content
    }).select('*');
}


export async function deleteReview(revId) {

    return await mybase.from('reviews').delete().eq('id', revId);

}


export async function deleteReplay(repId) {

    return await mybase.from('replays').delete().eq('id', repId);

}
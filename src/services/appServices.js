
import { getToken, mybase } from "./global";


export async function addNewApp(object) {
    return await mybase.from('apps').insert({
        object
    });

}


export async function getAppByName(appName) {
    return await mybase.from('apps').select("*").eq('name', appName)

}


export async function getHeighlyApps(setOff) {
    return await mybase.rpc('get_rand_apps_order_by_rating', setOff);
}

export async function getNewApps() {
    return await mybase.from('apps').select("app_name", "shot_url", "description", "logo_url", "created_at").order("created_at", { ascending: false }).limit(10);
}

export async function updateApp(object, id) {
    return mybase.from('apps').update(object).eq('id', id);
}


export async function deleteApp(id) {
    return mybase.from('apps').delete().eq('id', id);
}


export async function getUserSavedApps(userId) {
    return await mybase.rpc('get_saved_apps', userId);
}

export async function bookmark(userId, appId) {

    return await mybase.from('favorite').insert({ user_id: userId, app_id: appId });

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
    return await mybase.from('reviews').select('*').eq('app_id', appId).limit(10);

}

export async function createReplay(replayTo, reviewId, content) {
    const { id, avatar_url, name } = getLocalUser();
    return await mybase.from('reviews').insert({
        replay_to: replayTo,
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
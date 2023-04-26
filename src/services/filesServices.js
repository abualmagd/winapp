import { mybase } from "./global";


export async function uploadAvatar(url, file) {
    return await mybase.storage.from('avatars').upload(url, file, {
        cacheControl: '3600',
        upsert: false
    })

}


export function createImageUrl(path) {
    return mybase.storage.from('avatars').getPublicUrl(path);
}

export function getRandomFileName() {
    var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    var random = ("" + Math.random()).substring(2, 8);
    var random_number = timestamp + random;
    return random_number;
}
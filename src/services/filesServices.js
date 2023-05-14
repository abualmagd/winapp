import { mybase } from "./global";


export async function uploadAvatar(file) {
    const randomName = getRandomFileName();
    return await mybase.storage.from('avatars').upload(randomName, file, {
        cacheControl: '3600',
        upsert: false
    })

}

export async function uploadAppLogo(file) {
    const randomName = getRandomFileName();
    return await mybase.storage.from('logos').upload(randomName, file, {
        cacheControl: '3600',
        upsert: false
    });
}

export async function uploadAppShot(file) {
    const randomName = getRandomFileName();
    return await mybase.storage.from('screenshots').upload(randomName, file, {
        cacheControl: '3600',
        upsert: false
    });
}

export function createImageUrl(bucket, path) {
    return mybase.storage.from(bucket).getPublicUrl(path);
}

export function getRandomFileName() {
    var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    var random = ("" + Math.random()).substring(2, 8);
    var random_number = timestamp + random;
    return random_number;
}
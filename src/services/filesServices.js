import { mybase } from "./global";


export async function uploadAvatar(url, file) {
    return await mybase.storage.from('avatars').upload(url, file, {
        cacheControl: '3600',
        upsert: false
    })

}
import { getToken, mybase } from "./global";


export async function getCurrentUser() {
    return await mybase.auth.getUser();
}


export async function getUserData() {
    const id = await getToken();
    return await mybase.from('profiles').select('*').eq('id', id);
}


export async function updateUser(name, avatarUrl) {
    const id = await getToken();
    return await mybase.from('profiles').update({
        'name': name,
        'avatar-url': avatarUrl
    }).eq('id', id);
}



export function saveUserLocal(user) {
    return localStorage.setItem('my-user', JSON.stringify(user));
}



export function getLocalUser() {
    return JSON.stringify(localStorage.getItem('my-user'));
}
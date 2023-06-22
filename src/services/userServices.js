import { getToken, mybase } from "./global";


export async function getCurrentUser() {
    return await mybase.auth.getUser();
}


export async function getUserData() {
    const id = await getToken();
    return await mybase.from('profiles').select("*").eq('id', id);
}


export async function updateUserAvatar(avatarUrl) {
    const id = await getToken();
    return await mybase.from('profiles').update({
        'avatar_url': avatarUrl
    }).eq('id', id);
}


export async function getUserPlan(id) {
    const { data } = await mybase.from('user_plan').select('type').eq('user_id', id);
    return data[0]['type'];
}



export async function updateCurrentName(name) {
    const { email } = getLocalUser();
    console.log('name', name);
    console.log('email', email);
    return await mybase.from('profiles').update({
        'name': name
    }).eq('email', email);

}



export function saveUserLocal(user) {
    return localStorage.setItem('my-user', JSON.stringify(user));
}

export function removeUserLocal() {
    return localStorage.setItem('my-user', null);
}



export function getLocalUser() {
    return JSON.parse(localStorage.getItem('my-user'));
}
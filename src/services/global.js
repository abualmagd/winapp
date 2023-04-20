
import { createClient } from "@supabase/supabase-js";



export const mybase = createClient("https://pqfiwahrarbivadfpoix.supabase.co", process.env.REACT_APP_API_KEY);



export function saveToken(token) {
    return localStorage.setItem('my-token', JSON.stringify(token));
}


export function getToken() {
    console.log("token from storage", JSON.parse(localStorage.getItem('my-token')))
    return JSON.parse(localStorage.getItem('my-token'));
}


export function removeToken() {
    return localStorage.removeItem('my-token')
}
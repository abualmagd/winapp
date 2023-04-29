
import { mybase } from "./global";


export async function addNewApp(object) {
    return await mybase.from('apps').insert({
        object
    });

}


export async function getAppByName(appName) {
    return await mybase.from('apps').select("*").eq('name', appName)

}


export async function getHeighlyApps(setOff) {
    return await mybase.rpc('', setOff);
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



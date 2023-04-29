import { mybase } from "./global";


export async function getUserPlan(id) {
    return await mybase.from('user_plan').select('*').eq('user_id', id);
}

export async function changeUserPlan(id, type) {
    var exp = new Date(new Date().setDate(new Date().getDate() + 30));
    const { error } = await mybase.from('user_plan').update({ 'type': type, 'expiry_date': exp }).eq('user_id', id);
    if (error) return Error(error.message);
    return await mybase.from('apps').update('plan_name', type).eq('user_id', id);
}
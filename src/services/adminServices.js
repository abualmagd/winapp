
//admin functions
import { getRandomFileName } from "./filesServices";
import { mybase } from "./global";
import { createClient } from "@supabase/supabase-js";


const adbase=createClient("https://pqfiwahrarbivadfpoix.supabase.co", process.env.REACT_APP_SER_KEY,{
    auth:{
        persistSession:false,
        autoRefreshToken:false,
        detectSessionInUrl:false,
    }
});

export async function getUnApprovedTools(){
    //waiting == 0 , approved===1 ,refused===-1
    return await mybase.from('apps').select('*').eq('status',0).order('created_at',false);
}

export async function approveTool(appId){
 console.log(appId)
    return await adbase.from('apps').update({status:1}).eq('id',appId);


}

export async function refuseTool(appId){
   
    return await adbase.from('apps').update({status:-1}).eq('id',appId);

}

export async function getSolutrendRecords(){
   return await mybase.rpc('get_solutrend_status');
}

export async function updateStatus({id,status}){
    return await adbase.rpc('update_status',{
        appstatus:status,
        appid:id
    });
 }


 export async function getReports(){
    return await mybase.from('app_reports').select();
 }


 export async function postArticle(newData){
    return await mybase.from('articles').insert(newData).select('id');
 }

 export async function postArticleImage(file){
    const randomName = getRandomFileName(); 
    return await mybase.storage.from('blog').upload(randomName, file, {
        cacheControl: '3600',
        upsert: false
    });
 }
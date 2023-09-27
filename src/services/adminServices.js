
//admin functions
import { mybase } from "./global";


export async function getUnApprovedTools(){
    //waiting == 0 , approved===1 ,refused===-1
    return await mybase.from('apps').select('*').eq('status',0).order('created_at',false);
}

export async function approveTool(appId){

    return await mybase.from('apps').update({status:1}).eq('id',appId);


}

export async function refuseTool(appId){
    return await mybase.from('apps').update({status:-1}).eq('id',appId);

}

export async function getSolutrendRecords(){
   return await mybase.rpc('get_solutrend_status');
}

export async function updateStatus({id,status}){
    return await mybase.rpc('update_status',{
        appstatus:status,
        appid:id
    });
 }


 export async function getReports(){
    return await mybase.from('app_reports').select();
 }
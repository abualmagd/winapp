import { useMutation, useQuery, useQueryClient } from "react-query";
import { approveTool, getReports, getSolutrendRecords, getUnApprovedTools, refuseTool } from "../services/adminServices";
import { Link, useNavigate } from "react-router-dom";
import '../styles/main.css';
import AppBar from "../components/appBar";



export function Panel(){


    const query=useQuery({queryKey:"records",queryFn:getSolutrendRecords});

    const{data}=useQuery({queryKey:"newListed",queryFn:getUnApprovedTools});

    const {data:reports}=useQuery({queryKey:'reports',queryFn:getReports,enabled:false});

    const queryClient=useQueryClient();

    const showReports=()=>{
        queryClient.refetchQueries('reports');
       
    }

    return <div className="main">
        <AppBar />

        <h2  className="records-h">
            our numbers:
        </h2>
      {
        
                  query.data&&  <Records data={query.data.data[0]} />
      }

      <div className="soluRecords">
        <Link  className="addBtn" to={'/panel/publish'}>Add Article</Link>
      </div>

        <h2 className="new-listed-h">
            new listed tools need approval:
        </h2>
        <div className="newContainer">
        {data&&data.data.map((t,index)=>{
            return  <PanelCard app={t} key={index}/> 
        })}
        </div>
  
      <div>
            <h2  id="reports" className="reports-h" onClick={showReports}>
                reports:
            </h2>
            <div className="newContainer">
                {
                   reports&& reports.data.map((r,index)=>{
                    return <div key={index} className="newCard">
                        <h5>app id: {r['app_id']}</h5>
                        <p>content: {r['content']}</p>
                    </div>
                    })
                }
            </div>
        </div>
    </div>
}



function PanelCard({app}) {


    const navigate = useNavigate();
    const name = app['app_name'];
    let url = "/store/" + name;

    const client=useQueryClient();
    const mutation =useMutation({
        mutationFn:approveTool,
        onSuccess:()=>{
            client.invalidateQueries({queryKey:'newListed'});
            
        }
    
    });

    const refuse =useMutation({
        mutationFn:refuseTool,
        onSuccess:()=>{
            client.invalidateQueries({queryKey:'newListed'});
            
        }
    
    });






    return (
        <div className="card">
            <div className="logo-panel" >
                <img src={app['logo_url']} alt="logo"/>
            </div>

            <img src={app['shot_url']} alt='' className="cardImage" />
            <div className="myHeadCard">
                <h2 onClick={() => navigate(url)} >{name}</h2>
               
            </div>
            <h4>description: </h4>
            <h5 className='cardH5' onClick={() => navigate(url)}>{app['description']}
            </h5>
            <h4>whats app: </h4>
            <h6>
            {app['what_app']}
            </h6>
            <h4>who need: </h4>
            <h6>
            {app['who_need']}
            </h6>
            <div className="grey-line"></div>
            
            <h6>{app['category']}</h6>
            <a href={app['app_url']}>({app['app_url']})</a>
            {mutation.error&& <div className="error">
                {mutation.error}
            </div>
          }
              {mutation.data&& <div className="error">
                {mutation.data.data}
            </div>
          }
           <div className="btn-wrap">
                     <div className="btn-panel" onClick={()=>mutation.mutate(app['id'])}>{mutation.isLoading?'loading':'Approve'}</div>
            <div className="btn-panel" onClick={()=>refuse.mutate(app['id'])}>{refuse.isLoading?'loading':'Refuse'}</div>
           </div>
   
        </div>

    );
}

function Records({data}){

    const queryClient=useQueryClient();
    const showReports=()=>{
        queryClient.refetchQueries('reports');
       
    }


return <div className="soluRecords">
<div className="views">
    {data['users_count'] + " "} <span>users</span>
</div>
<div className="shares">
    {data['tools_count'] + " "}  <span>tools</span>
</div>
<div className="reviews">
    {data['reviews_count'] + " "}  <span>reviews</span>
</div>
<div className="reports-h" onClick={showReports}>
  <a href="#reports">{data['reports_count'] + " "}  <span>reports</span></a>  
</div>

<div className="shares">
    {data['subscribers_count'] + " "}  <span>subscribers</span>
</div>
</div>
}
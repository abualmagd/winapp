import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/monthTools.css';
import { ShareButtonsForApp } from './shareButtons';
import { faMedal, faShareAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getMonthTools } from '../services/appServices';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';



export function MonthTools() {

    const {isLoading,isError,data}=useQuery({queryKey:"getMonthTools",queryFn:getMonthTools})
    


    if (isLoading) {

        return <div>
            <div className="appPageContainer" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }
    if (isError) {
        return <div></div>
    }

const myData=data.data;
    const cards = myData.map((t, index) => {
        return <SmallMonthCard key={index} tool={t} />
    });
    return <div className="month-section" >
        <h3 className='h-head-main'>
            Tools of  {monthyDate()} :
        </h3>
        <div className="month-tools" id='tools-of-month'>
            {cards}
        </div>
        <p>  chosen by solutrend team depend on scores the tool achieved.</p>
    </div>

}


export function MonthApps() {

   
    const {isLoading,isError,data}=useQuery({queryKey:"getMonthTools",queryFn:getMonthTools})


 window.scrollTo(0, 0);


    if (isLoading) {

        return <div>
            <div className="appPageContainer" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }
    if (isError) {
        return <div></div>
    }


    const myData=data.data;
    const cards = myData.map((t, index) => {
        return <MonthCard key={index} tool={t} />
    });
    return <div className="month-section" >
        <h1 className='h-head-main'>
            Tools of  {monthyDate()} :
        </h1>
        <div className="month-tools" id='tools-of-month'>
            {cards}
        </div>
        <p>  chosen by solutrend team depend on scores the tool achieved.</p>
    </div>

}


export function MonthCard({ tool }) {


    return <div className="month-card" >
        <div className="head-m-container">
            <div className="tool-logo">
                <img src={tool['logo_image']} alt={tool['app_name']} />
            </div>
            <div>
                <h3 className='tool-name'>
                    {tool['app_name']}  <div className="trophy-container">
                        <FontAwesomeIcon icon={faMedal} color={tool['position'] === 'bronze' ? '#CD7F32' : tool['position']} size='lg' />
                    </div>
                </h3>
                {tool['inner_url'] && <div className="tool-profile">
                    open profile
                </div>}
            </div>

        </div>
        <p className="tool-description">
            {tool['description']}
        </p>
        <div style={{ marginLeft: "15px" }}>


            <h4 className='h-bold'>
                features:
            </h4>
            <List dataList={tool['features']} />
            <h4 className='h-bold'>
                scores:
            </h4>
            <Mapizer dataList={tool['scores']} />
        </div>
        <ShareButtonsForApp url={'https://solutrend.com/ranking'} description={tool['description']}
            title={tool['app_name'] + ' was awarded the ' + tool['position'] + ' medal in ' + monthyDate() + ' Solutrend Ranking'}

            image={tool['logo_image']} />
    </div>
}




export function List({ dataList }) {
    const myLi = dataList.map((item, index) => {
        return <li className='li-list' key={index}>{item}</li>
    })

    return <ul className="list">
        {myLi}
    </ul>
}


//['Cost Effective' ,'Free Plan' ,'Language support','easy to use','comperhensive','customers satisfaction ]
export function Mapizer({ dataList }) {

    return <ul className="list-map" >
        <li>Cost Effective: <span> {dataList[0]}/10</span></li>
        <li>Free Plan: <span> {dataList[1]}/10</span></li>
        <li>Language support: <span> {dataList[2]}/10</span></li>
        <li>easy to use: <span> {dataList[3]}/10</span></li>
        <li>comperhensive: <span> {dataList[4]}/10</span></li>
        <li>customers satisfaction: <span> {dataList[5]}/10</span></li>
    </ul>
}






export function monthyDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const dateOfMonth = `${months[month]} ${year}`;
    return dateOfMonth;

}



export function SmallMonthCard({ tool }) {

    const shareApp = () => {

        try {
            const url = 'https://solutrend.com/ranking';
            const title = `tool['app_name'] + ' was awarded the ' + tool['position'] + ' medal in ' + monthyDate() + ' Solutrend Ranking'`;
            const description = tool['description'];
            navigator.share({ title, description, url });

            console.log('shared succfuly');
        } catch (error) {
            console.log(error);
        }
    }
    return <div className="month-card" >
        <FontAwesomeIcon icon={faShareAlt} className='shareIconn' size='xl' onClick={shareApp} />

        <div className="head-m-container">

            <div className="tool-logo">
                <img src={tool['logo_image']} alt={tool['app_name']} />
            </div>
            <div>
                <h3 className='tool-name'>
                    {tool['app_name']}  <div className="trophy-container">
                        <FontAwesomeIcon icon={faMedal} color={tool['position'] === 'bronze' ? '#CD7F32' : tool['position']} size='lg' onClick={() => shareApp()} />
                    </div>
                </h3>
                {tool['inner_url'] && <div className="tool-profile">
                    open profile
                </div>}
            </div>
        </div>
        <p className="tool-description">
            {tool['description']}
        </p>
        <Link to={'/ranking'} className='readMore'>Read more ... </Link>
    </div>
}
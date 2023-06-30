import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import AppBar from './appBar';
import TopSection from './top';
import { getLocalUser } from '../services/userServices';
import { userAllowedtoAdd } from '../services/appServices';


export default function Main() {
    const navigat = useNavigate();

    const limitUserApps = async () => {
        const { plan } = getLocalUser() ?? 'free';
        const result = await userAllowedtoAdd();
        console.log('limit from main div : ', result.data);
        if (!result.data) {
            navigat('/limit', -1);
        } else {
            if (plan === 'free') {
                navigat('/plan', -1);
            } else {
                navigat('/add', -1);
            }

        }
    }



    return (
        <main className="main">
            <AppBar />
            <h1 className="title">Now you can tell the business world about <span className='titleSpn'>  Your App</span></h1>
            <div className='mainAbt'>
                <p className='paragraph'>We make it easy to get your app into the hands of more people,
                    <br />A simple, super-fast way to increase your customers and new users.
                </p>
            </div>

            <div onClick={() => limitUserApps()} className="addBtn">Add Your App Free</div>
            <TopSection />
        </main>
    );
}
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
            <h1 className="title">Now you can tell the business world about <span className='titleSpn'>  Your  Tool</span></h1>
            <div className='mainAbt'>
                <p className='paragraph'>
                    Solutrend  provide a simple, super-fast solution that ensures your product gets into the hands of more people.
                    List your tool and
                    Let Solutrend be the catalyst for your success.
                </p>
            </div>

            <div onClick={() => limitUserApps()} className="addBtn">Add Your Tool Free</div>
            <TopSection />
        </main>
    );
}
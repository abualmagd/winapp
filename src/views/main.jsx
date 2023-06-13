import { Link } from 'react-router-dom';
import '../styles/main.css';
import AppBar from './appBar';
import TopSection from './top';
import { getLocalUser } from '../services/userServices';


export default function Main() {

    const { plan } = getLocalUser() ?? 'free';



    return (
        <main className="main">
            <AppBar />
            <h1 className="title">Now you can tell the world about <span className='titleSpn'>  Your App</span></h1>
            <div className='mainAbt'>
                <p className='paragraph'>We make it easy to get your app into the hands of more people,
                    A simple,<br />     super-fast way to increase your installs and new users.
                </p>
            </div>

            <Link to={plan === 'free' ? "/plan" : '/add'} className="addBtn">Add Your App Free</Link>
            <TopSection />
        </main>
    );
}
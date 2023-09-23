import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/main.css';
import AppBar from "../components/appBar";
import TopSection from './top';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


export default function Main() {

    const searchRef = useRef();
    const naigate = useNavigate();

    function handleEnter(e) {
        const str = searchRef.current.value;
        if (e.key === 'Enter' & str.trim() != null) {
            console.log(str);
            const url = "/explore/" + searchRef.current.value;
            naigate(url);

        }
    }

    return (
        <main className="main">
            <AppBar />
            <h1 className="title">Revolutionize Your Productivity with the  <span className='titleSpn'>Best Software </span>Solutions</h1>
            <div className="input-container">
                <input ref={searchRef} type="text" className="search"
                    placeholder="search apps, tools, extensions and more" onKeyDown={(e) => handleEnter(e)} />
                <div className="clear" onClick={() => searchRef.current.value = null}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
            <h2 className='h2-head'>List Your SaaS Software Tool in a Few Clicks, We'll Promote It to the World.</h2>
            <div onClick={() => naigate('/add')} className="addBtn">List My Tool Now</div>
            <TopSection />
        </main>
    );
}
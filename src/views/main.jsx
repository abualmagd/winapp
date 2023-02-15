import '../styles/main.css';
import AppBar from './appBar';
import TopSection from './top';


export default function Main() {
    return (
        <main className="main">
            <AppBar />
            <h1 className="title">Now you can tell the world about <span className='titleSpn'>  Your App</span></h1>
            <div className='mainAbt'>
                <p className='paragraph'>We make it easy to get your app into the hands of more people,
                    A simple,<br />     super-fast way to increase your installs and new users.
                </p>
            </div>
            <div className="addBtn">Add Your Tool</div>
            <TopSection />
        </main>
    );
}
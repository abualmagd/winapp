





export default function AppBar(){
    return (
        <header className="header">
           <div className="logo">WinApp</div>
           <div className="navigation">
            <a href="/#" className="link" id="lang">language</a>
            <a href="/#" className="link">blog</a>
            <a href="/#" className="link">pricing</a>
            <div className="submitButton">
            <a href="/#" className="linkBtn">list your app</a>
            </div>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="error" className="avatar" />           
          
           </div>
        </header>
    );

}
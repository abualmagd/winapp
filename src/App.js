
import { useEffect, useState } from 'react';
import MyAlert from './helper/myAlert';
import AddTool from './views/addTool';
import Footer from './views/footer';
import Login from './views/login';
import Main from './views/main';
import NewPart from './views/newSection';
import SignUp from './views/signUp';



function App() {
  const [showed, updateShowed] = useState(false);

  const showAlert = () => {
    updateShowed(current => current = true);
  }

  const closeAlert = () => {
    updateShowed(current => current = false);
    console.log('callded');
  }

  useEffect(() => {
    setTimeout(() => { showAlert(); }, 5000);
  }, []);
  return (
    <div className="App" >


      <AddTool />
      { /*  <SignUp />
       <Login />
      {showed && <MyAlert close={closeAlert} />}
      <Main />
      <NewPart />
      <Footer />*/}


    </div>
  );
}

export default App;

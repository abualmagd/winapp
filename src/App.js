

import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import AuthProvider from './controllers/authProvider';

import AddTool from './views/addTool';
import AppPage from './views/appPage';
import DashBoard from './views/dashboard';
import EditTool from './views/editApp';
import ErrorPage from './views/error';
import Home from './views/home';
import Login from './views/login';
import SignUp from './views/signUp';
import StepOne from './views/stepOne';
import Explore from './views/explorePage';
import Saved from './views/saved';
import Settings from './views/settings';
import PlanChanger from './views/shiftPlan';
import AccountInfo from './views/accountInfo';



function App() {

  console.log("url : ", process.env.REACT_APP_URL_KEY);


  return (
    <div className="App" >

      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
          <Route path='/signup' element={<SignUp />} errorElement={<ErrorPage />} />
          <Route path='/login' element={<Login />} errorElement={<ErrorPage />} />
          <Route path='/add' element={<AddTool />} errorElement={<ErrorPage />} />
          <Route path='/explore/:content' element={<Explore />} errorElement={<ErrorPage />} />
          <Route path='/app/:id' element={<AppPage />} errorElement={<ErrorPage />} />
          <Route path='/changePlan' element={<PlanChanger />} errorElement={<ErrorPage />} />
          <Route path='/edit' element={<ProtectedRoute>
            <AccountInfo />
          </ProtectedRoute>} errorElement={<ErrorPage />} />
          <Route path='/plan' element={<ProtectedRoute>
            <StepOne />
          </ProtectedRoute>} errorElement={<ErrorPage />} />
          <Route path='/dashboard' element={<ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>} errorElement={<ErrorPage />} />
          <Route path='/saved' element={<ProtectedRoute>
            <Saved />
          </ProtectedRoute>} errorElement={<ErrorPage />} />
          <Route path='/settings' element={<ProtectedRoute>
            <Settings />
          </ProtectedRoute>} errorElement={<ErrorPage />} />
          <Route path='/edit' element={<ProtectedRoute>
            <EditTool />
          </ProtectedRoute>} errorElement={<ErrorPage />} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

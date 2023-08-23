

import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import AuthProvider from './controllers/authProvider';
import AddTool from './views/addTool';
import AppPage from './views/appPage';
import DashBoard from './views/dashboard';
import EditTool from './views/editApp';
import ErrorPage from './views/errorPage';
import Home from './views/home';
import Login from './views/login';
import SignUp from './views/signUp';
import StepOne from './views/stepOne';
import Explore from './views/explorePage';
import Saved from './views/saved';
import Settings from './views/settings';
import AccountInfo from './views/accountInfo';
import { Confirmation } from './views/confirmationEmail';
import { EmailConfirmed } from './views/emailConfirmed';
import { useCallback, useEffect } from 'react';
import { authState, restoreSession } from './services/authServices';
import RecoveryPassword from './views/recoverPass';
import AppImageUploader from './views/addAppImages';
import { ThemeProvider } from './controllers/themeProvider';
import MyBlog from './views/blog';
import Article from './views/article';
import { HelmetProvider } from 'react-helmet-async';
import Unsubscribe from './views/unsubscribe';
import Payment from './views/payment';
import NewPlans from './views/newPlans';
import { Subscribe } from './views/subscribe';



function App() {

  const sessionrecover = useCallback(async () => {
    try {
      await restoreSession();
    } catch (error) {
      console.log('error from app js ', error);
      window.location.reload();
    }

  }, []);




  useEffect(() => {
    console.log("once our app started");
    sessionrecover();
    authState();
  }, [sessionrecover]);



  return (
    <div className="App" >
      <HelmetProvider>
        <AuthProvider>
          <ThemeProvider>

            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<MyBlog />} />
              <Route path='/blog/:title' element={<Article />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/price' element={<NewPlans />} />
              <Route path='/plan' element={<NewPlans />} />
              <Route path='/unsub/:email' element={<Unsubscribe />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sent' element={<Confirmation />} />
              <Route path='/confirm' element={<EmailConfirmed />} />
              <Route path='/confirm/*' element={<EmailConfirmed />} />
              <Route path='/explore/:content' element={<Explore />} />
              <Route path='/store/:name' element={<AppPage />} />
              <Route path='/recover' element={<RecoveryPassword />} />
              <Route path='/subscribe' element={<Subscribe />} />
              <Route path='/payment' element={<Payment />} />

              <Route path='/edit' element={<ProtectedRoute>
                <AccountInfo />
              </ProtectedRoute>} />

              <Route path='/add' element={<ProtectedRoute>
                <AddTool />
              </ProtectedRoute>} />

              <Route path='/uploader/:id' element={
                <AppImageUploader />
              } />
              <Route path='/plan/:id' element={<ProtectedRoute>
                <StepOne />
              </ProtectedRoute>} />

              <Route path='/dashboard' element={<ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>} />

              <Route path='/saved' element={<ProtectedRoute>
                <Saved />
              </ProtectedRoute>} />

              <Route path='/settings' element={<ProtectedRoute>
                <Settings />
              </ProtectedRoute>} />

              <Route path='/editApp/:id' element={<ProtectedRoute>
                <EditTool />
              </ProtectedRoute>} />

              <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;

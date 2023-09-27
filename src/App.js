

import { Navigate, Route, Routes } from 'react-router-dom';
import {AdminProtectedRoute, ProtectedRoute} from './components/protectedRoute';
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
import { Gift } from './views/gift';
import { Ranking } from './views/ranking';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Panel } from './views/panel';


const queryClient=new QueryClient();

function App() {

  //use react query to cache user session restoringe 
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
    <QueryClientProvider client={queryClient}>
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
              <Route path='/gifts' element={<Gift />} />
              <Route path='/ranking' element={<Ranking />} />
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

              <Route path='/panel' element={<AdminProtectedRoute>
                <Panel />
              </AdminProtectedRoute>} />

              <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </HelmetProvider>
    </div>
     </QueryClientProvider>
  );
}

export default App;


/*
tawk chat
  <script type="text/javascript">
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/64e52986cc26a871b030c751/1h8fike42';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  </script>
*/
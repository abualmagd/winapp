

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import AuthProvider from './controllers/authProvider';

import AddTool from './views/addTool';
import AppPage from './views/appPage';
import ErrorPage from './views/error';
import Home from './views/home';
import Login from './views/login';
import SignUp from './views/signUp';
import StepOne from './views/stepOne';



function App() {



  return (
    <div className="App" >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
            <Route path='/signup' element={<SignUp />} errorElement={<ErrorPage />} />
            <Route path='/login' element={<Login />} errorElement={<ErrorPage />} />
            <Route path='/add' element={<AddTool />} errorElement={<ErrorPage />} />
            <Route path='/app/:id' element={<AppPage />} errorElement={<ErrorPage />} />
            <Route path='/plan' element={<ProtectedRoute>
              <StepOne />
            </ProtectedRoute>} errorElement={<ErrorPage />} />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

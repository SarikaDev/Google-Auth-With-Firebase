import React from 'react';
import { Signup, Login, Dashboard, ForgotPassword, UpdateProfile } from './Components/index2';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route  element={<PrivateRoutes/>} >

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/updateProfile' element={<UpdateProfile />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

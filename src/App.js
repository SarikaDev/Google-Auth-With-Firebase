import React from 'react';
import { Signup, Login, Dashboard, ForgotPassword, UpdateProfile } from './Components/index2';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/updateProfile' element={<UpdateProfile />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

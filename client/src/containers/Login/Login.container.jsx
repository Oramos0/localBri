import React from 'react';
// * Components
import LoginComponent from './components/Form.component';
import NavbarHome from '../../shared/components/NavbarHome/NavbarHome.component';
import Alert from '../../shared/components/Alert/Alert.component';
// * Styles
import './Login.container.css';

const LoginContainer = () => {
  return (
    <div className='login-component'>
      <NavbarHome />
      <Alert />
      <LoginComponent />
    </div>
  );
};

export default LoginContainer;

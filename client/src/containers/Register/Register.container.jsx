import React from 'react';
// Components
import NavbarHome from '../../shared/components/NavbarHome/NavbarHome.component';
import FormRegister from './components/FormRegister.component';
import Alerts from '../../shared/components/Alert/Alert.component';
// Styles
import './register.container.css';

const RegisterContainer = () => {
  return (
    <div className='register-container'>
      <NavbarHome />
      <Alerts />
      <FormRegister />
    </div>
  );
};

export default RegisterContainer;

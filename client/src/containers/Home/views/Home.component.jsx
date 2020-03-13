import React from 'react';
// * Components
import MainHome from './components/MainHome.component';
import ServicesHome from './components/ServicesHome.component';

// * Styles
import './home.component.css';

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <MainHome />
      <ServicesHome />
    </div>
  );
};

export default HomeComponent;

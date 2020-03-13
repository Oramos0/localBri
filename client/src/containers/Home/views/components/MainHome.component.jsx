import React from 'react';
import { Link } from 'react-router-dom';
// * Ant Design Components
import { Button } from 'antd';
// * Styles
import './mainHome.component.css';

const MainHome = () => {
  return (
    <div className='main-home'>
      <div className='main-home-img-backround'></div>
      <div className='main-home-info'>
        <h2 className='main-home-title'>Apoya tu gente, consume local</h2>
        <h3 className='main-home-description'>
          Ayuda a hacer crecer el comercio local de tu zona o da a conocer tu
          increible producto. Aporta a tu region algo que no existia antes.
        </h3>
        <div className='main-home-btns'>
          <Link to='/registro'>
            <Button className='main-home-btn1' icon='user' type='primary'>
              Registrarse
            </Button>
          </Link>

          <Link to='/about'>
            <Button
              className='main-home-btn2'
              icon='question-circle'
              type='primary'
            >
              Saber más
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHome;

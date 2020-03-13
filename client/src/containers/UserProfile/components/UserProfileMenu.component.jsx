import React, { useEffect, useRef } from 'react';
// * Styles and Ant-Design
import './userProfileMenu.component.css';
import { Button } from 'antd';

function UserProfileMenuComponent({
  section1,
  section2,
  section3,
  section4,
  section5
}) {
  useEffect(() => {
    showAndHideSection(1);
  }, []);

  const showAndHideSection = theSection => {
    if (theSection === 1) {
      section1.current.style.display = 'flex';
      section2.current.style.display = 'none';
      section3.current.style.display = 'none';
      section4.current.style.display = 'none';
      section5.current.style.display = 'none';
      console.log('section 1');
    } else if (theSection === 2) {
      section1.current.style.display = 'none';
      section2.current.style.display = 'flex';
      section3.current.style.display = 'none';
      section4.current.style.display = 'none';
      section5.current.style.display = 'none';
      console.log('section 2');
    } else if (theSection === 3) {
      section1.current.style.display = 'none';
      section2.current.style.display = 'none';
      section3.current.style.display = 'flex';
      section4.current.style.display = 'none';
      section5.current.style.display = 'none';
      console.log('section 3');
    } else if (theSection === 4) {
      section1.current.style.display = 'none';
      section2.current.style.display = 'none';
      section3.current.style.display = 'none';
      section4.current.style.display = 'flex';
      section5.current.style.display = 'none';
      console.log('section 4');
    } else if (theSection === 5) {
      section1.current.style.display = 'none';
      section2.current.style.display = 'none';
      section3.current.style.display = 'none';
      section4.current.style.display = 'none';
      section5.current.style.display = 'flex';
      console.log('section 5');
    }
  };

  return (
    <div className='gallery-menu-container'>
      <div>
        <Button
          className='gallery-menu-btn'
          type='primary'
          onClick={() => showAndHideSection(1)}
        >
          <i className='fas fa-list-ul fa-1x' style={{ color: '#222831' }}></i>
          <p>Mis Productos</p>
        </Button>
      </div>

      <div>
        <Button
          className='gallery-menu-btn'
          type='primary'
          onClick={() => showAndHideSection(2)}
        >
          <i
            className='fas fa-plus-circle fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Agregar Producto</p>
        </Button>
      </div>

      <div>
        <Button
          className='gallery-menu-btn'
          type='primary'
          onClick={() => showAndHideSection(3)}
        >
          <i
            className='fas fa-hand-holding-usd fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Donaciones</p>
        </Button>
      </div>

      <div>
        <Button
          className='gallery-menu-btn'
          type='primary'
          onClick={() => showAndHideSection(4)}
        >
          <i
            className='fas fa-credit-card fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Metodos de pago</p>
        </Button>
      </div>

      <div>
        <Button
          className='gallery-menu-btn'
          type='primary'
          onClick={() => showAndHideSection(5)}
        >
          <i
            className='fas fa-user-edit fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Editar Perfil</p>
        </Button>
      </div>
    </div>
  );
}

export default UserProfileMenuComponent;

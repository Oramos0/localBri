import React from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import './artGalleryMenu.component.css';
import { Button } from 'antd';

const ArtGalleryMenuComponent = () => {
  return (
    <div className='gallery-menu-container'>
      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i className='fas fa-palette fa-1x' style={{ color: '#222831' }}></i>
          <p>Pinturas</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i className='fas fa-dove fa-1x' style={{ color: '#222831' }}></i>
          <p>Artesanias</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i
            className='fas fa-pepper-hot fa-1x'
            style={{ color: '#222831' }}
          ></i>
          <p>Comida</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i className='fas fa-gem fa-1x' style={{ color: '#222831' }}></i>
          <p>Joyería</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i className='fas fa-tshirt fa-1x' style={{ color: '#222831' }}></i>
          <p>Ropa</p>
        </Button>
      </Link>

      <Link to='/'>
        <Button className='gallery-menu-btn' type='primary'>
          <i className='fas fa-fire-alt fa-1x' style={{ color: '#222831' }}></i>
          <p>Descubrir</p>
        </Button>
      </Link>
    </div>
  );
};

export default ArtGalleryMenuComponent;

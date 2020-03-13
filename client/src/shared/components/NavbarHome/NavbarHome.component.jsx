import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// * Styles and Ant-Design
import './navbarHome.component.css';
import { Popover, Icon } from 'antd';
import logo from '../../../media/localbri.png';
// * Actions
import { logout } from '../../../actions/authActions';

const NavbarHomeComponent = ({ user: { name }, logout, _userId }) => {
  const [session, setSession] = useState(null);
  let history = useHistory();
  useEffect(() => {
    console.log('nombre', name);
    if (name) {
      setSession(() => name);
    }
  }, [name]);

  const onLogout = () => {
    logout();
    history.push('/');
  };

  // * CONTENT WITHOUT SESSION
  const contentWithoutSession = (
    <div className='navbarHome-sub2'>
      <Link to='/about'>
        <label className='navbarHome-sub2-btn-login'>Nosotros</label>
      </Link>

      <Link to='/galeria'>
        <label className='navbarHome-sub2-btn-login'>Tienda</label>
      </Link>

      <Link to='/login'>
        <label className='navbarHome-sub2-btn-login'>Iniciar Sesión</label>
      </Link>

      <Link to='/registro'>
        <label className='navbarHome-sub2-btn-login'>Registrarse</label>
      </Link>
    </div>
  );

  // * CONTENT WITH SESSION
  const contentWithSession = (
    <div className='navbarHome-sub2'>

      <Link to='/about'>
        <label className='navbarHome-sub2-btn-login'>Nosotros</label>
      </Link>
      <Link to='/galeria'>
        <label className='navbarHome-sub2-btn-login'>Tienda</label>
      </Link>

      <label onClick={onLogout} className='navbarHome-sub2-btn-login'>
        Cerrar Sesión
      </label>

      <Link to={`/perfil/${_userId}`}>
        <label className='navbarHome-sub2-btn-login'>| 😊 {name}</label>
      </Link>
    </div>
  );

  // * MOBILE
  const contentSizeMobile = (
    <div className='navbarHome-sub2'>
      <Popover
        className='popover'
        placement='bottomRight'
        content={session ? contentWithSession : contentWithoutSession}
        trigger='click'
      >
        <Icon type='menu' />
      </Popover>
    </div>
  );

  return (
    <div className='navbarHome-container'>
      <div className='navbarHome-sub1'>
        <Link to='/'>
          <img src={logo} alt='Localbri Arte Local' />
          <h1 className='title-store'>LocalBri</h1>
        </Link>
      </div>
      {window.innerWidth <= 630
        ? contentSizeMobile
        : session
        ? contentWithSession
        : contentWithoutSession}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  _userId: state.auth.user._id
});

export default connect(mapStateToProps, { logout })(NavbarHomeComponent);

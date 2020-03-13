import React from 'react';
import { connect } from 'react-redux';

// * Styles
import './userProfileEdit.component.css';

const UserProfileEditComponent = ({
  userImage,
  userName,
  userDescription,
  userPhone,
  userFb,
  userTw,
  userIg
}) => {
  return (
    <div className='user-edit-container'>
      <img className='user-image' src={userImage} alt='user-image' />
      <h2 className='user-name'>{userName}</h2>

      <p className='user-description'>{`"${userDescription}"`}</p>
      <div className='user-phone-container'>
        <i className='fas fa-phone'></i>
        <h3 className='user-phone'>{userPhone}</h3>
      </div>

      <div className='user-socials'>
        <a className='user-social-link' href={userFb} target='_blank'>
          <i className='fab fa-facebook-square fa-2x'></i>
          <p className='user-social-text'>Facebook</p>
        </a>

        <a className='user-social-link' href={userTw} target='_blank'>
          <i className='fab fa-twitter-square fa-2x'></i>
          <p className='user-social-text'>Twitter</p>
        </a>

        <a className='user-social-link' href={userIg} target='_blank'>
          <i className='fab fa-instagram fa-2x'></i>
          <p className='user-social-text'>Instagram</p>
        </a>
      </div>
    </div>
  );
};

UserProfileEditComponent.defaultProps = {
  userPhone: '3126660202',
  userDescription:
    'AL NO AGREGAR DESCRIPCION ERES Albert Einstein que fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se lo considera el científico más importante, conocido y popular del siglo XX.​​',
  userFb: 'https://www.facebook.com/NASA/',
  userTw: 'https://twitter.com/NASA',
  userIg: 'https://www.instagram.com/nasa/'
};

const mapStateToProps = state => ({
  userName: state.auth.user.name,
  userDescription: state.auth.user.description,
  userPhone: state.auth.user.phone,
  userImage: state.auth.user.image
});

export default connect(mapStateToProps, {})(UserProfileEditComponent);

import React from 'react';
// * Components
import UserProfile from './UserProfile.component';
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';
// * Styles
import './userProfile.container.css';

const UserProfileContainer = () => {
  return (
    <div className='user-profile-container'>
      <NavbarHome userData={'juan'} />
      <UserProfile />
    </div>
  );
};

export default UserProfileContainer;

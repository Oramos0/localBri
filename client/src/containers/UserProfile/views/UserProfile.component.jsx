import React, { useRef } from 'react';
// * Components
import DonationsList from '../components/DonationsList.component'
import CreditCardForm from '../components/CreditCardForm.component';
import UserProfileMenuComponent from '../components/UserProfileMenu.component';
import FormProduct from '../../../shared/components/FormProduct/FormProduct.component';
import UserProfileEdit from '../components/UserProfileEdit.component';
import ArtGallery from '../../ArtGallery/views/components/ArtGalleryCardContainer.component';
import Search from '../../../shared/components/SearchInput/Search.component';
// * Styles
import './userProfile.component.css';

function UserProfileComponent() {
  // * Refs
  const userProfileSection1Ref = useRef();
  const userProfileSection2Ref = useRef();
  const userProfileSection3Ref = useRef();
  const userProfileSection4Ref = useRef();
  const userProfileSection5Ref = useRef();

  return (
    <div className='user-profile-form-container'>
      <UserProfileMenuComponent
        section1={userProfileSection1Ref}
        section2={userProfileSection2Ref}
        section3={userProfileSection3Ref}
        section4={userProfileSection4Ref}
        section5={userProfileSection5Ref}
      />

      <div className='user-profile-section-1' ref={userProfileSection1Ref}>
        <div className='filter-search-container'>
          <h2 className='card-container-title'>
            <span role='img' aria-label='palette'>
              🎨
            </span>
            {`    Mis Productos    `}
            <span role='img' aria-label='taco'>
              🌮
            </span>
          </h2>
          <Search />
        </div>
        <ArtGallery />
      </div>
      <div className='user-profile-section-2' ref={userProfileSection2Ref}>
        <FormProduct />
      </div>
      <div className='user-profile-section-3' ref={userProfileSection3Ref}>
        <DonationsList/>
      </div>
      <div className='user-profile-section-4' ref={userProfileSection4Ref}>
        <CreditCardForm />
      </div>
      <div className='user-profile-section-5' ref={userProfileSection5Ref}>
        <UserProfileEdit />
      </div>
    </div>
  );
}

export default UserProfileComponent;

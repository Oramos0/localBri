import React from 'react';
// * Components
// import ArtGalleryMenuComponent from './components/ArtGalleryMenu.component';
import CardContainer from './components/ArtGalleryCardContainer.component';
import ArtGalleryMenuFilterComponent from './components/ArtGalleryMenuFilter.component';
import Search from '../../../shared/components/SearchInput/Search.component';
// * Utils
// import { images } from '../../../utils/images';
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';
// * Styles
import './artGallery.component.css';

const ArtGalleryComponent = () => {
  return (
    <div className='art-gallery-container'>
      <NavbarHome />
      {/* <ArtGalleryMenuComponent /> */}
      <div className='filter-search-container'>
        <ArtGalleryMenuFilterComponent />
        <Search />
      </div>
      <CardContainer />
    </div>
  );
};

export default ArtGalleryComponent;

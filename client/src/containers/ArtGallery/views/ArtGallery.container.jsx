import React from 'react';

// * Components
import ArtGallery from './ArtGallery.component';
// * Styles
import './artGallery.container.css';

const ArtContainerContainer = () => {
  return (
    <div className='art-gallery-container'>
      <ArtGallery />
    </div>
  );
};

export default ArtContainerContainer;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
// * Components
import Slideshow from '../Slideshow/Slideshow.component';
import ArtGalleryDetailsComponent from '../../../containers/ArtGallery/views/components/ArtGalleryDetails.component';
// * Styles
import './imageCard.component.css';
// * Ant Design Components
import { Button, Modal } from 'antd';
// * Utils
import briGlitch from '../../../media/localbri-glitch.png';
// * Actions
import { deleteProduct } from '../../../actions/productActions';

function ImageCardComponent({
  deleteProduct,
  footer,
  images,
  title,
  description,
  price,
  likes,
  ubication,
  id
}) {
  // * Consts
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // * Methods for the modal
  const showModal = () => {
    setVisible(true);
  };

  const onDelete = () => {
    deleteProduct(id);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  // * Create the correct Array for the Carousel
  const imagesArrayToCarouselArray = imagesArray => {
    let carouselArray = imagesArray.map((el, i) => {
      return { id: i, url: el };
    });
    return carouselArray;
  };

  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <Slideshow images={images} />
        </div>
        <div className='card-container'>
          <h3 className='card-title'>{title}</h3>
          <div>
            <i className='fas fa-dollar-sign' /> {price}
          </div>
          <div>
            <i className='fas fa-map-marker-alt' /> {ubication}
          </div>
          {footer && (
            <div className='card-footer'>
              <div>
                <i className='fas fa-heart'></i>{' '}
                <label className='card-likes'>{likes}</label>
              </div>
              <div className='card-link'>
                <Button
                  className='card-button'
                  icon='eye'
                  type='primary'
                  onClick={showModal}
                >
                  Ver
                </Button>
              </div>
            </div>
          )}
        </div>
        {location.pathname !== '/galeria' && (
          <Button
            className='card-button-delete'
            icon='close'
            type='danger'
            onClick={onDelete}
          />
        )}
      </div>
      <Modal
        className='imageCard-modal'
        visible={visible}
        onCancel={handleCancel}
        width={'50vw'}
      >
        <ArtGalleryDetailsComponent
          carouselImages={imagesArrayToCarouselArray(images)}
          title={title}
          description={description}
          price={price}
          location={ubication}
          likes={likes}
        />
      </Modal>
    </div>
  );
}

ImageCardComponent.defaultProps = {
  title: 'Agrega Titulo',
  price: 'Proximamente',
  images: [briGlitch],
  footer: false,
  likes: 43
};

export default connect(null, {
  deleteProduct
})(ImageCardComponent);

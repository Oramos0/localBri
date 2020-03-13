import React from 'react';
import { Link } from 'react-router-dom';
// * Components
import Carousel from '../../../../shared/components/CarouselDetails/CarouselDetails.component';
// * Ant Design Components
import { Button } from 'antd';
// * Styles
import './artGalleryDetails.component.css';

function ArtGalleryDetailsComponent({
  carouselImages,
  title,
  description,
  price,
  location,
  likes
}) {
  return (
    <div className='artGalleryDetails'>
      <div className='artGalleryDetails-container'>
        {/* 1 */}
        <div className='artGalleryDetails-cont-1'>
          <Carousel images={carouselImages} />
        </div>
        {/* 2 */}
        <div className='artGalleryDetails-cont-2'>
          <div className='artGalleryDetails-cont-2-title-heart'>
            <h2 className='artGalleryDetails-cont-2-title'>{title}</h2>
            <div className='artGalleryDetails-cont-2-heart'>
              <i className='fas fa-heart'></i>
              <label className='artGalleryDetails-cont-2-likes'>{likes}</label>
            </div>
          </div>
          <p className='artGalleryDetails-cont-2-desc'>{description}</p>
          <div className='artGalleryDetails-cont-2-price'>
            <i className='fas fa-dollar-sign' /> <span>{price}</span>
          </div>
          <div className='artGalleryDetails-cont-2-location'>
            <i className='fas fa-map-marker-alt' /> <span>{location}</span>
          </div>

          <div className='artGalleryDetails-cont-2-btns'>
            <div>
              <Button className='artGalleryDetails-cont-2-btn-1' type='primary'>
                <i
                  className='fas fa-dollar-sign fa-1x'
                  style={{ color: 'white' }}
                ></i>
                <p>Comprar</p>
              </Button>
            </div>

            <div>
              <Button className='artGalleryDetails-cont-2-btn-2' type='primary'>
                <i className='fas fa-hand-holding-usd fa-1x'></i>
                <p>Donar</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtGalleryDetailsComponent;

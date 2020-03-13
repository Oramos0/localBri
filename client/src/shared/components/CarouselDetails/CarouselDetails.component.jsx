import React from 'react';
// * Components
import { Carousel } from 'react-responsive-carousel';
// * Styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carouselDetails.component.css';

function CarouselDetailsComponent({ images }) {
  return (
    <Carousel
      className='carousel-body'
      infiniteLoop={true}
      autoPlay
      interval={5000}
      width={'50vw'}
      showThumbs={false}
    >
      {images.map(image => {
        return (
          <div className='carousel-container'>
            <img src={image.url} alt='carousel-items' />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselDetailsComponent;

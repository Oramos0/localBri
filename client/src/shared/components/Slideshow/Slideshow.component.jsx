import React, { useState } from 'react';
// * Styles
import './slideshow.component.css';

let interval;
const SlideshowComponent = ({ images }) => {
  let [current, setCurrent] = useState(0);

  const handleMouseOver = () => {
    if (current < images.length - 1) {
      setCurrent(current++);
    } else {
      setCurrent(0);
    }
    interval = setTimeout(() => {
      handleMouseOver();
    }, 1800);
  };

  const handleMouseOut = () => {
    clearTimeout(interval);
    setCurrent(0);
  };
  return (
    <div
      className='slideshow'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className='slide-item'
        style={{ backgroundImage: `url(${images[current]})` }}
        alt={`Slide item`}
      />
    </div>
  );
};
export default SlideshowComponent;

import React from 'react';
import './index.css';
import Slider from 'react-slick';
import gallerysData from './imageGalleryData';
import GalleryItem from './GalleryItem';

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {gallerysData.map((el) => <GalleryItem src={el.src} title={el.title} key={el.id} />)}
      </Slider>
    </div>
  );
}

export default MySlider;

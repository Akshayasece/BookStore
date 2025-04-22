// ImageSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const images = [
  'https://e1.pxfuel.com/desktop-wallpaper/481/738/desktop-wallpaper-the-best-thriller-books-of-all-time.jpg',
  'https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/d732469a-e84b-461a-8789-0795777ad486/Best-fantasy-books-2.jpg',
  'https://e0.pxfuel.com/wallpapers/778/167/desktop-wallpaper-scary-stories-to-tell-in-the-dark-horror-book.jpg',
  'https://images.contentstack.io/v3/assets/blt64b2de096a6f4663/blt033b30a3e409507e/644815ca7fbb1e0c982fd0e1/popular_romance.png'
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  return (
     <div className="bd">        
    <Slider {...settings}>
      {images.map((imageUrl, index)=>(
        <div key={index} className="slider-item" >
          <img src={imageUrl} alt={`Slide ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </Slider>
    </div>
  );
};
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick}></div>;
};
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick}></div>;
};

export default ImageSlider;

import React from 'react';
import Slider from 'react-slick';
import sliderImage from '../assets/images/item.jpg';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='mt-24 pt-12'>
        <Slider {...settings}>
          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;

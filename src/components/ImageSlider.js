import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../assets/images/0.png';
import sliderImage2 from '../assets/images/1.png';
import sliderImage3 from '../assets/images/2.png';
import sliderImage4 from '../assets/images/3.png';
import sliderImage5 from '../assets/images/4.png';
import sliderImage6 from '../assets/images/5.png';
import sliderImage7 from '../assets/images/6.png';
import sliderImage8 from '../assets/images/7.png';
import sliderImage9 from '../assets/images/8.png';

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
            <img src={sliderImage1} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage2} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage3} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage4} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage5} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage6} alt='' className='max-w-full' />
          </div>

          <div className=''>
            <img src={sliderImage7} alt='' className='max-w-full' />
          </div>
          <div className=''>
            <img src={sliderImage8} alt='' className='max-w-full' />
          </div>
          <div className=''>
            <img src={sliderImage9} alt='' className='max-w-full' />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;

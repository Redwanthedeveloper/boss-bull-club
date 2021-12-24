import React from 'react';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <>
      <div className='hero__section'>
        <div className='container mx-auto'>
          <div className='hero__top'>
            <h1 className='text-center font-bold text-4xl lg:text-7xl text-secondary uppercase mt-4'>
              The Boss bulls club
            </h1>
            <h3 className='text-center font-medium uppercase text-base tracking-widest lg:leading-10 text-primary'>
              PRESTIGIOUS CLUB OF 9,999 ULTRA-REALISTIC AND METAVERSE-READY BOSS
              BULLS
            </h3>
          </div>
          <div className='hero__slider'>
            <div className='slider__top py-4 mt-4 lg:py-2.5 lg:mt-2.5 text-center font-body text-secondary mb-[1.8em]'>
              <p className='leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                voluptatum dolores minima sint
              </p>
            </div>
          </div>
        </div>
        <ImageSlider />
      </div>
    </>
  );
};

export default Hero;

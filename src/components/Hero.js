import React from 'react';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <>
      <div className='hero__section'>
        <div className='container mx-auto'>
          <div className='hero__top'>
            <h1 className='text-center font-bold text-4xl lg:text-7xl text-secondary uppercase mt-4'>
              Bag Club 7
            </h1>
            <h3 className='text-center font-medium uppercase text-base tracking-widest lg:leading-10 text-primary'>
              7000 unique luxury NFT handbags. Gifted by men, desired by women.
              Join the magic and mystique of the lucky number 7 in the
              metaverse.
              <br />
              Mint Date Coming Soon!
            </h3>
          </div>
          <div className='hero__slider'>
            {/* <div className='slider__top py-4 mt-4 lg:py-2.5 lg:mt-2.5 text-center font-body text-secondary mb-[1.8em]'>
              <p className='leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                voluptatum dolores minima sint
              </p>
            </div> */}
          </div>
        </div>
        <ImageSlider />
      </div>
    </>
  );
};

export default Hero;

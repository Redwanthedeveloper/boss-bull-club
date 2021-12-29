import React from 'react';
import image from '../assets/images/attribute.jpg';
const Attribute = () => {
  return (
    <>
      <div className='attribute mt-20' id='gallery'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='attribute__top mb-8'>
            <h2 className='text-center text-secondary text-4xl uppercase font-bold'>
              A HIGHER STANDARD FOR GENERATIVE NFTS
            </h2>
            <h3 className='text-center font-medium uppercase text-base tracking-widest leading-10 text-primary'>
              200 INCREDIBLE & UNIQUE ATTRIBUTES — CLICK THE IMAGE FOR A LARGER
              PREVIEW
            </h3>
          </div>
          <div className='attribute__images grid md:grid-cols-3 '>
            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>
            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={image}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attribute;

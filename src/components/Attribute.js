import React from 'react';
import attributeImage1 from '../assets/images/0.png';
import attributeImage2 from '../assets/images/1.png';
import attributeImage3 from '../assets/images/2.png';
import attributeImage4 from '../assets/images/3.png';
import attributeImage5 from '../assets/images/4.png';
import attributeImage6 from '../assets/images/5.png';
import attributeImage7 from '../assets/images/6.png';
import attributeImage8 from '../assets/images/7.png';
import attributeImage9 from '../assets/images/8.png';
import attributeImage10 from '../assets/images/9.png';
import attributeImage11 from '../assets/images/10.png';
import attributeImage12 from '../assets/images/11.png';
import attributeImage13 from '../assets/images/12.png';

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
                src={attributeImage1}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>
            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage2}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage3}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage4}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage5}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage6}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage7}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage8}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage9}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage10}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage11}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage12}
                alt=''
                className='hover:transform hover:scale-110 transition-all'
              />
            </div>

            <div
              className='attribute__item overflow-hidden cursor-pointer'
              data-aos='zoom-in'
            >
              <img
                src={attributeImage13}
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

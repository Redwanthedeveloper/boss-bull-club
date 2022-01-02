import React from 'react';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/3.png';

const Aboutus = () => {
  return (
    <>
      <div
        className='mt-20 bg-[#212940] py-20  flex flex-col justify-center'
        id=''
      >
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='mb-8'>
            <h2
              className='text-center text-secondary text-4xl uppercase font-bold'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              Easy Rarity Values
            </h2>
            <div className='about__wrapper grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-6'>
              <div className='about__left'>
                <p
                  className='text-left font-normal font-body leading-8 py-6 text-primary'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  Our bags and backgrounds are designed in 77 different colours.
                  Here is their order of rarity: <br />
                  <ol type='1' className='flex flex-wrap gap-2 items-center'>
                    <li className='bg-gray-500 px-4 rounded-full'>Black</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Brown</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Grey</li>
                    <li className='bg-gray-500 px-4 rounded-full'>White</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Red</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Orange</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Pink</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Purple</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Blue</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Green</li>
                    <li className='bg-gray-500 px-4 rounded-full'>Yellow</li>
                  </ol>
                </p>
                <p className='text-left font-body text-primary py-4'>
                  Within each colour, the darkest colour is always the most
                  rare. For example, dark brown is more rare than light brown.
                  <br /> <br />
                  The bags come in two materials:
                  <br />
                  Crocodile leather 33% of bags
                  <br />
                  Original Leather 66% of bags
                  <br /> <br />
                  That’s it! Our rarities are super simple so that everyone can
                  easily figure out what’s rare and what’s not (even people not
                  in the club!).
                </p>
              </div>
              <div className='about__right flex gap-2 lg:justify-end'>
                <div className=''>
                  <img src={image1} alt='' className='max-w-[14rem] w-full' />
                </div>
                <div className=''>
                  <img src={image2} alt='' className='max-w-[14rem] w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

import React from 'react';
import image from '../assets/images/item.jpg';

const Team = () => {
  return (
    <>
      <div className='team mt-20' id='team'>
        <div className='container mx-auto'>
          <h2 className='text-center text-secondary text-4xl uppercase font-bold mb-20'>
            Meet our team
          </h2>
          <div className='team__wrapper grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <div className='team__item p-6 ' data-aos='zoom-in'>
              <img src={image} alt='' className='rounded-xl' />
              <h3 className='text-left text-secondary py-4 text-2xl uppercase font-bold'>
                Lorem, ipsum.
              </h3>
              <p className='text-left font-body text-primary pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                veritatis quasi ipsa quas
              </p>
              <h5 className='text-base font-bold text-secondary text-right uppercase'>
                - Boss bull
              </h5>
            </div>

            <div className='team__item p-6 ' data-aos='zoom-in'>
              <img src={image} alt='' className='rounded-xl' />
              <h3 className='text-left text-secondary py-4 text-2xl uppercase font-bold'>
                Lorem, ipsum.
              </h3>
              <p className='text-left font-body text-primary pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                veritatis quasi ipsa quas
              </p>
              <h5 className='text-base font-bold text-secondary text-right uppercase'>
                - Boss bull
              </h5>
            </div>

            <div className='team__item p-6 ' data-aos='zoom-in'>
              <img src={image} alt='' className='rounded-xl' />
              <h3 className='text-left text-secondary py-4 text-2xl uppercase font-bold'>
                Lorem, ipsum.
              </h3>
              <p className='text-left font-body text-primary pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                veritatis quasi ipsa quas
              </p>
              <h5 className='text-base font-bold text-secondary text-right uppercase'>
                - Boss bull
              </h5>
            </div>

            <div className='team__item p-6 ' data-aos='zoom-in'>
              <img src={image} alt='' className='rounded-xl' />
              <h3 className='text-left text-secondary py-4 text-2xl uppercase font-bold'>
                Lorem, ipsum.
              </h3>
              <p className='text-left font-body text-primary pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                veritatis quasi ipsa quas
              </p>
              <h5 className='text-base font-bold text-secondary text-right uppercase'>
                - Boss bull
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

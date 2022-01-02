import React, { useState } from 'react';

// import logo from '../assets/images/logo.png';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='header w-full' id='home'>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='header__wrapper flex lg:flex justify-between items-center h-[120px] w-full'>
          <div className=' w-32 lg:w-40'>
            {/* <img src={logo} alt='' />  */}
            <h1 className='font-bold text-4xl text-secondary'>Logo</h1>
          </div>
          <div className='header__main flex justify-between lg:justify-start lg:flex lg:gap-48 items-center'>
            <div className='block lg:hidden'>
              <button
                onClick={(e) => {
                  setShowNav(!showNav);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='ionicon'
                  viewBox='0 0 512 512'
                  className='text-secondary h-8 w-8'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-miterlimit='10'
                    stroke-width='32'
                    d='M80 160h352M80 256h352M80 352h352'
                  />
                </svg>
              </button>
            </div>
            {/* mobile menu  */}
            {showNav && (
              <div className='lg:hidden absolute w-full bg-[#212940] top-24 left-0 z-10'>
                <ul className='flex flex-col w-full gap-8 items-center py-12  text-primary uppercase font-medium'>
                  <li>
                    <a href='http://' target='_blank' rel='noopener noreferrer'>
                      <svg
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='text-primary h-8 w-8'
                        width='24px'
                        height='24px'
                      >
                        <path d='M21,23l-4.378-3.406L17,21H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14c1.105,0,2,0.895,2,2V23z M16.29,8.57	c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61	C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58c-0.44-0.15-0.82-0.35-1.21-0.65	l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65L14.41,16	c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z' />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://twitter.com/BagClub7'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 30 30'
                        className='text-primary h-8 w-8'
                        width='30px'
                        height='30px'
                      >
                        {' '}
                        <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
                      </svg>
                    </a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#home'>Home</a>
                  </li>

                  <li className='hover:text-secondary'>
                    <a href='#gallery'>Gellery</a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#roadmap'>Roadmap</a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#team'>Team</a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#faq'>Faq</a>
                  </li>
                </ul>
              </div>
            )}

            <div className='hidden lg:block flex-1'>
              <ul className='flex lg:gap-16 text-primary lg:text-lg uppercase font-medium w-full items-center'>
                <li>
                  <a
                    href='https://www.discord.com/BagClub7'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='text-primary h-8 w-8'
                      width='24px'
                      height='24px'
                    >
                      <path d='M21,23l-4.378-3.406L17,21H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14c1.105,0,2,0.895,2,2V23z M16.29,8.57	c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61	C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58c-0.44-0.15-0.82-0.35-1.21-0.65	l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65L14.41,16	c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z' />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.twitter.com/BagClub7'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 30 30'
                      className='text-primary h-8 w-8'
                      width='30px'
                      height='30px'
                    >
                      {' '}
                      <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
                    </svg>
                  </a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#home'>Home</a>
                </li>

                <li className='hover:text-secondary'>
                  <a href='#gallery'>Gellery</a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#roadmap'>Roadmap</a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#team'>Team</a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#faq'>Faq</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

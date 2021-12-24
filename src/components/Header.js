import React, { useState } from 'react';

// import logo from '../assets/images/logo.png';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='header w-full'>
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
                  <li className='hover:text-secondary'>
                    <a href='#attribute'>attribute</a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#about'>About</a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#roadmap'>Roadmap</a>
                  </li>
                  <li className='hover:text-secondary'>
                    <a href='#team'>Team</a>
                  </li>
                </ul>
              </div>
            )}

            <div className='hidden lg:block flex-1'>
              <ul className='flex lg:gap-16 text-primary lg:text-lg uppercase font-medium w-full'>
                <li className='hover:text-secondary'>
                  <a href='#attribute'>attribute</a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#about'>About</a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#roadmap'>Roadmap</a>
                </li>
                <li className='hover:text-secondary'>
                  <a href='#team'>Team</a>
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

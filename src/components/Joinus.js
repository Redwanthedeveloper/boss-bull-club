import React from 'react';

const Joinus = () => {
  return (
    <>
      <div
        className='joinus mt-20 bg-[#212940] h-96 flex flex-col justify-center'
        id='joinus'
      >
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='attribute__top mb-8'>
            <h2 className='text-center text-secondary text-4xl uppercase font-bold'>
              Join us
            </h2>
            <h3 className='text-center font-medium uppercase text-base tracking-widest leading-10 text-primary'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              ipsum.
            </h3>
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-6 text-secondary uppercase text-xl border-2 w-56 rounded-sm px-4 py-1 mx-auto my-4 hover:text-primary hover:border-bprimary transition-all border-bsecondary'
            >
              <svg
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='text-primary h-10 w-10'
                width='24px'
                height='24px'
              >
                <path d='M21,23l-4.378-3.406L17,21H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14c1.105,0,2,0.895,2,2V23z M16.29,8.57	c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61	C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58c-0.44-0.15-0.82-0.35-1.21-0.65	l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65L14.41,16	c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z' />
              </svg>{' '}
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinus;

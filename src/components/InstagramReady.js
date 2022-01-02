import React from 'react';

const InstagramReady = () => {
  return (
    <>
      <div className='py-20  flex flex-col justify-center items-center' id=''>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='mb-8'>
            <h2
              className='text-center text-secondary text-4xl uppercase font-bold'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              Instagram Ready
            </h2>
            <div className='about__wrapper grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-6'>
              <div className='about__left'>
                <p
                  className='text-left font-normal font-body leading-8 py-6 text-primary'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  We have designed our NFTs so they are compatible with
                  Instagram.
                  <br />
                  <br />
                  We want the special women who are gifted one of our bags to be
                  able to show their friends.
                  <br /> <br />
                  The picture dimensions, and where the bag is set in the frame,
                  means it will show up beautifully as an Instagram profile
                  picture, stories highlight or post.
                </p>
              </div>
              <div className='about__right flex gap-2 justify-center lg:justify-end'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='ionicon text-secondary h-80 w-80'
                  viewBox='0 0 512 512'
                  fill='currentColor'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <title>Logo Instagram</title>
                  <path d='M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z' />
                  <path d='M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramReady;

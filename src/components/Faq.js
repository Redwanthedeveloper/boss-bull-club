import React from 'react';
import SingleFaq from './SingleFaq';

const Faq = () => {
  return (
    <>
      <div className='mt-20 ' id='faq'>
        <div className='container mx-auto'>
          <h2 className='text-center text-secondary text-4xl uppercase font-bold'>
            Frequently Ask question
          </h2>
          <div className='px-4 pt-4 sm:pt-8'>
            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

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
                  title='When is the mint date?'
                  content='To be confirmed in January 2022. To know the exact time in your City, go to this page and enter your City:
                  https://savvytime.com/converter/utc/dec-11-2021/11pm'
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
                  title='What will the price be?'
                  content='0.7 SOL. Check How To Mint for more information on the entire process of minting.  '
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
                  title='What is the utility? Is there anything other than the art?'
                  content={[
                    'Yes! Absolutely.',
                    <ol
                      style={{ listStyleType: 'number', paddingLeft: '2rem' }}
                    >
                      <li>Gift the NFT to the special woman in your life. </li>
                      <li>
                        NFT holders will be invited to real life events. As
                        there is a gifting element to our NFT club there will
                        always be one invite for the NFT holder and one invite
                        for their +1.{' '}
                      </li>
                    </ol>,
                  ]}
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
                  title='How do I get whitelisted? When will the pre-sale be?'
                  content='There is no whitelist or presale.'
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
                  title='How many bags will be available?
                    '
                  content='There will only be 7000 bags in our collection. Each one will be truly unique and exclusive and you will own all the rights to it. Owning a bag will come with several benefits, such as using one in the metaverse and accessing our exclusive club. '
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

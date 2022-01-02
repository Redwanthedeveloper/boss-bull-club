import React from 'react';

const OurBelief = () => {
  return (
    <>
      <div className='py-20 bg-secondary flex flex-col justify-center' id=''>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='mb-8'>
            <h2
              className='text-center text-secondary text-4xl uppercase font-bold'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              Our beliefs
            </h2>
            <div className='about__wrapper grid grid-cols-1  items-center gap-4 py-6'>
              <div className='about__center'>
                <p
                  className='text-center font-normal font-body leading-7 py-6 text-primary'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <strong className='font-heading text-xl'>
                    Simplicity is perfection
                  </strong>
                  <br />
                  From our bag design to our rarity table, we’ve cut out all the
                  unnecessary stuff. What you’re center with is the essentials.
                  This is all that matters.
                </p>

                <p
                  className='text-center font-normal font-body leading-7 py-6 text-primary'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <strong className='font-heading text-xl'>
                    Build for the long term
                  </strong>
                  <br />
                  We’re taking a long term view. As the first mover in the bag
                  fashion NFT space, our club will acquire strong market share
                  and build in value over time. In the future, having one of our
                  bags on your Instagram profile or within the metaverse will be
                  the ultimate status symbol.
                </p>

                <p
                  className='text-center font-normal font-body leading-7 py-6 text-primary'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <strong className='font-heading text-xl'>
                    Create opportunity
                  </strong>
                  <br />
                  We want to help create opportunities for the men and women in
                  our community. Successful and generous people are able to buy
                  and gift our NFTs. We will bring all of these people together
                  so they can combine to build value in each other’s lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBelief;

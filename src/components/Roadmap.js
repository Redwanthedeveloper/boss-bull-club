import React from 'react';
import roadmapImage1 from '../assets/images/0.png';
import roadmapImage2 from '../assets/images/1.png';
import roadmapImage3 from '../assets/images/2.png';
import roadmapImage4 from '../assets/images/3.png';
import roadmapImage5 from '../assets/images/4.png';
import roadmapImage6 from '../assets/images/5.png';
import roadmapImage7 from '../assets/images/6.png';
const Roadmap = () => {
  return (
    <>
      <div className='roadmap mt-20' id='roadmap'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='mb-8'>
            <h2 className='text-center text-secondary text-4xl uppercase font-bold'>
              Roadmap
            </h2>
            <h3 className='text-center font-medium uppercase text-base tracking-widest leading-10 text-primary'>
              SCROLL ALL THE WAY DOWN TO SEE EVERYTHING
            </h3>
          </div>
          <div className='roadmap__wrapper'>
            <div className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row  '>
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>
              <div className='left__item lg:pr-20 flex-1 overflow-hidden '>
                <img src={roadmapImage1} alt='' className='max-w-full' />
              </div>
              <div className='right__item  lg:pl-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  100% focus on art quality
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  NFTs last forever, so we’ve obsessed over the quality and
                  details to ensure a perfect mint.
                </p>
              </div>
            </div>

            <div
              className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder  lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>

              <div className='right__item  lg:pr-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  Successful Launch — January 2022
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  We are working hard to ensure a smooth mint. Our website is
                  the only place to mint!
                </p>
              </div>
              <div className='left__item lg:pl-20 flex-1 overflow-hidden '>
                <img src={roadmapImage2} alt='' className='max-w-full' />
              </div>
            </div>
            <div
              className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>
              <div className='left__item lg:pr-20 flex-1 overflow-hidden '>
                <img src={roadmapImage3} alt='' className='max-w-full' />
              </div>
              <div className='right__item  lg:pl-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  Marketplace Listing — February 2022
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  We will list on Solana Art, Magic Eden and SolSea.
                </p>
              </div>
            </div>

            <div
              className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>

              <div className='right__item  lg:pr-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  Rarity Table — February 2022
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  Our rarity table will be released in more granular detail.
                  That said, we already believe we’ve made our rarity
                  combinations simple enough so anyone can work out a rough idea
                  of how rare an NFT is. “Simplicity is the ultimate
                  sophistication” — Leonardo Da Vinci.
                </p>
              </div>
              <div className='left__item lg:pl-20 flex-1 overflow-hidden '>
                <img src={roadmapImage4} alt='' className='max-w-full' />
              </div>
            </div>

            <div
              className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>
              <div className='left__item lg:pr-20 flex-1 overflow-hidden '>
                <img src={roadmapImage5} alt='' className='max-w-full' />
              </div>
              <div className='right__item  lg:pl-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  Sweep The Floor - February — June 2022
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  We will use our treasury to buy back any bag listed below mint
                  price on any secondary marketplace. The price on mint day will
                  be the cheapest.
                </p>
              </div>
            </div>

            <div
              className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>

              <div className='right__item  lg:pr-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  Events + Publicity — from July 2022
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  We will begin to host a series of events and parties around
                  the world for our members. The publicity will increase demand
                  for our bags and desire to be part of the club. The subsequent
                  networking and collaborating opportunities will also be
                  significant.
                </p>
              </div>
              <div className='left__item lg:pl-20 flex-1 overflow-hidden '>
                <img src={roadmapImage6} alt='' className='max-w-full' />
              </div>
            </div>

            <div
              className='roadmap__items relative flex items-center pb-20 flex-col lg:flex-row'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='line__holder lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4'></div>
              <div className='icon__holder lg:w-12 lg:h-12 bg-[#FFFFFF3D] absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 rotate-45'></div>
              <div className='left__item lg:pr-20 flex-1 overflow-hidden '>
                <img src={roadmapImage7} alt='' className='max-w-full' />
              </div>
              <div className='right__item  lg:pl-20 flex-1'>
                <h2 className='mb-2 text-secondary text-4xl uppercase font-bold'>
                  Metaverse Evolution — from July 2022
                </h2>
                <p className='text-left text-primary font-body leading-7'>
                  We will start the development process to ensure our bags can
                  be used on all developing metaverse platforms in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

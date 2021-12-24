import React from 'react';

const Aboutus = () => {
  return (
    <>
      <div
        className='aboutus mt-20 bg-[#212940] py-20 lg:py-0 lg:min-h-[384px] flex flex-col justify-center'
        id='about'
      >
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='mb-8'>
            <h2
              className='text-center text-secondary text-4xl uppercase font-bold'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              About us
            </h2>
            <h3
              className='text-center font-normal font-body text-lg leading-8 py-6 text-primary'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum fuga ipsa autem necessitatibus quos beatae dicta, animi
              culpa suscipit nobis qui hic minima laboriosam? Distinctio rerum
              laboriosam iure, cupiditate, ipsum cumque quam iusto placeat
              maiores autem consequuntur, quod libero voluptate?
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

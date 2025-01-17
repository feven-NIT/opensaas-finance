import React from 'react';

export default function DiscoverTraining() {
  return (
    <div className='mx-auto mt-16 max-w-7xl sm:mt-32 sm:px-6 lg:px-8 bg-[#020048] px-8 py-20 sm:rounded-xl shadow-xl'>
      <h1 className='text-3xl font-bold tracking-tight text-center text-white sm:text-4xl'>
        Discover our formation training
      </h1>
      <p className='mt-6 text-lg leading-8 text-center text-white sm:text-xl'>
        Future Crafters has supported hundreds of students over the years in their M&A interview preparations
        and offers a turnkey solution.
      </p>
      <div className='mt-10 text-center'>
        <a
          href='/services'
          className='inline-block px-6 py-3 text-base font-semibold text-[#020048] bg-white rounded-md shadow-md hover:bg-gray-200'
        >
          Our Services
        </a>
      </div>
    </div>
  );
}
import React from 'react';
import LogoRothschild from '../images/Logo-rothschild.jpg';
import LogoBnp from '../images/Logo-bnp.svg';
import LogoDc from '../images/Logo-dc.jpeg';
import LogoKpmg from '../images/Logo-kpmg.png';

export default function Alumnies() {
  return (
    <div className='mx-auto mt-16 max-w-7xl sm:mt-32 sm:px-6 lg:px-8 bg-[#ebebf8] px-8 py-20 sm:rounded-xl shadow-xl'>
      <h1 className='text-3xl font-bold tracking-tight text-center text-[#020048] sm:text-4xl'>
        Our Alumnies
      </h1>
      <p className='mt-6 text-lg leading-8 text-center text-[#020048] sm:text-xl'>
        Future Crafters’s former students are now working in
      </p>
      <div className="mt-10 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoRothschild}
              alt="Alumni 1"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoBnp}
              alt="Alumni 2"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoDc}
              alt="Alumni 3"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoKpmg}
              alt="Alumni 4"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

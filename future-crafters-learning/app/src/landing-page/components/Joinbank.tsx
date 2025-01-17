import JoinUs from '../images/join-us.jpg';
import React from 'react';

export default function Presentation() {
  return (
    <div className="mt-16 bg-[#020048] py-12 text-white">
      <div className="container mx-auto px-6 sm:flex sm:items-center sm:space-x-12">
        <div className="sm:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight text-center sm:text-left sm:text-4xl">
            Join an Investing Bank or an Elite Boutique
          </h1>
          <p className="mt-6 text-lg leading-8 text-center sm:text-left sm:text-xl">
            Our formation prepares you for the interviews of the most demanding and selective financial institutions. Our alumni are currently working for the most prestigious banks and boutiques.
          </p>
        </div>
        <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center sm:justify-start">
          <img
            src={JoinUs}  // Replace with your image path
            alt="Investing Bank"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

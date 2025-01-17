import React from 'react';
import { Link } from 'react-router-dom';
import Pack1Image from '../images/pack1.png'; // Remplacez par les images appropriées
import Pack2Image from '../images/pack2.png';
import Pack3Image from '../images/pack3.png';
import { routes } from 'wasp/client/router'; // Assurez-vous que vos routes sont correctement définies

export default function Packages() {
  return (
    <div className='mx-auto mt-16 max-w-7xl sm:mt-32 sm:px-6 lg:px-8 bg-[#020048] px-8 py-20 sm:rounded-xl shadow-xl'>
      <h1 className='text-3xl font-bold tracking-tight text-center text-white sm:text-4xl'>
        Our Packages
      </h1>
      <p className='mt-6 text-lg leading-8 text-center text-white sm:text-xl'>
        Choose the right package for your career goals and get prepared for your next M&A interview.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pack 1: Break into Interviews */}
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-lg mb-6">
            <img
              src={Pack1Image}
              alt="Break into interviews"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <h2 className="text-xl font-bold text-[#020048] mb-4">Break into Interviews</h2>
        </div>

        {/* Pack 2: Interviews Master */}
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-lg mb-6">
            <img
              src={Pack2Image}
              alt="Interviews Master"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <h2 className="text-xl font-bold text-[#020048] mb-4">Interviews Master</h2>
        </div>

        {/* Pack 3: Modelling Master */}
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-lg mb-6">
            <img
              src={Pack3Image}
              alt="Modelling Master"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <h2 className="text-xl font-bold text-[#020048] mb-4">Modelling Master</h2>
        </div>
      </div>

      {/* Bouton d'achat */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to={routes.PricingPageRoute.to}  // Assurez-vous que la route de la page de prix est définie
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-[#FF8C00] hover:ring-2 hover:ring-[#e07b00] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Buy Our Pack <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

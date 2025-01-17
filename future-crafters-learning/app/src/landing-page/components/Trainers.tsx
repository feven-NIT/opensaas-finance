import React from 'react';
import LogoDauphine from '../images/Logo-dauphine.jpg';
import LogoHec from '../images/Logo-hec.jpg';
import LogoMoelis from '../images/Logo-moelis.png';
import LogoCarlyle from '../images/Logo-carlyle.png';
import LogoUbs from '../images/Logo-ubs.png';

export default function Trainers() {
  return (
    <div className='mx-auto mt-16 max-w-7xl sm:mt-32 sm:px-6 lg:px-8 bg-[#ebebf8] px-8 py-20 sm:rounded-xl shadow-xl'>
      <h1 className='text-3xl font-bold tracking-tight text-center text-[#020048] sm:text-4xl'>
        Our Prestigious Trainers
      </h1>
      <p className='mt-6 text-lg leading-8 text-center text-[#020048] sm:text-xl'>
        Our trainers went to the most prestigious universities and schools. Our team also have made careers in the most prestigious institutions and are well experienced in the M&A sector.
      </p>
      <div className="mt-10 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoDauphine}
              alt="Trainer 1"
              className="w-24 h-24 object-contain" // Ajuste l'image pour être centrée dans le carré
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoHec}
              alt="Trainer 2"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoMoelis}
              alt="Trainer 3"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoCarlyle}
              alt="Trainer 4"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="w-40 h-40 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={LogoUbs}
              alt="Trainer 5"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

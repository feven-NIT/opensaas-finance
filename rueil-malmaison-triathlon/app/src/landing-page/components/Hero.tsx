import openSaasBannerWebp from '../../client/static/open-saas-banner.webp';
import { Link } from 'react-router-dom';
import { routes } from 'wasp/client/router';
import { DocsUrl } from '../../shared/common';

export default function Hero() {
  return (
    <div
      className="relative pt-14 w-full min-h-screen bg-cover bg-center shadow-lg"
      style={{
        backgroundImage: `url(${openSaasBannerWebp})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Overlay />
      <TopGradient />
      <BottomGradient />
      <div className="py-24 sm:py-32 text-white relative z-10"> {/* Ajouté z-10 ici */}
        <div className="mx-auto px-6">
          <div className="lg:mb-18 mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-6xl font-alvarado">
              Succeed to your M&A interviews
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// Filtre noir moins sombre
function Overlay() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
      aria-hidden="true"
    />
  );
}

function TopGradient() {
  return (
    <div
      className="absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full h-1/3 bg-gradient-to-b from-black to-transparent opacity-60"
      aria-hidden="true"
    />
  );
}

function BottomGradient() {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-60"
      aria-hidden="true"
    />
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="py-10 lg:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            À propos de <span className="text-yellow-500">Future Crafters</span>
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white">
          Nous sommes un groupe de passionnés dédié à vous aider à exceller dans vos entretiens d’embauche et à transformer votre avenir professionnel.
        </p>
        <div className="my-8 border rounded-3xl border-gray-900/10 dark:border-gray-100/10">
          <div className="space-y-10 my-10 py-8 px-4 mx-auto sm:max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Qui sommes-nous ?</h3>
            <p className="text-lg text-gray-600 dark:text-white">
              Future Crafters a été créé par 4 passionnés de finance qui ont longtemps lutté pour réussir leurs entretiens et ont décidé de créer une solution tout-en-un pour maîtriser le processus d’entretien.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8">Nous étions comme vous...</h3>
            <p className="text-lg text-gray-600 dark:text-white">
              Lorsque nous étions à l'école, nous étions très anxieux à propos de notre avenir. Grâce à notre collaboration, nous avons réussi les entretiens des entreprises les plus prestigieuses.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8">Notre mission</h3>
            <p className="text-lg text-gray-600 dark:text-white">
              Aujourd'hui, nous vous proposons de ne pas vivre la même lutte que nous. C'est pour cette raison que nous avons créé Future Crafters. Nous avons conçu une plateforme dédiée pour vous aider à réussir vos entretiens sans stress, avec des formations pratiques, du coaching personnalisé et une approche complète.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8">Future Crafters est...</h3>
            <p className="text-lg text-gray-600 dark:text-white">
              Une plateforme où vous pouvez trouver les ressources nécessaires pour exceller dans vos entretiens et obtenir le job de vos rêves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

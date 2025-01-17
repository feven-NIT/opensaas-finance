import React, { useState, useEffect, useRef } from 'react';
import Video1 from './video/song1.mp4'
import { type User } from "wasp/entities";

const ModellingMasterPage = ({ user }: { user: User }) => {

  if (user.credits !== 3) {
    return (
      <div className="formation-page py-10 lg:mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Accès refusé
            </h2>
          </div>
          <div className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white">
            Vous devez avoir 3 crédits pour accéder à cette formation. Veuillez vérifier votre compte.
          </div>
        </div>
      </div>
    );
  }

  const videos = [
    { 
      title: "Introduction à la formation", 
      url: Video1, // Local video URL
      isYouTube: false // Flag to check if this is a YouTube video
    }, 
    { 
      title: "Chapitre 1 : Les bases", 
      url: "https://media.istockphoto.com/id/1058701732/fr/vid%C3%A9o/gros-plan-des-images-de-pieds-f%C3%A9minins-cyclisme-un-v%C3%A9lo-dans-le-parc-du-matin-ou-le-boulevard.mp4?s=mp4-640x640-is&k=20&c=aNllUx7pK1-KY6jOF3YFpZU7rzb_17m1JA65AllBz9k=", // YouTube video URL (example)
      isYouTube: true // Flag to indicate it's a YouTube video
    },
    { 
      title: "Chapitre 2 : Approfondissement", 
      url: "https://media.istockphoto.com/id/1141524580/fr/vid%C3%A9o/tourn%C3%A9-de-jeune-homme-aventureux-sautant-dans-la-belle-piscine-de-loc%C3%A9an.mp4?s=mp4-640x640-is&k=20&c=3kFoQJm1al2On0yPH7_ad2LnoeT10fT1U47BDG2mdG4=", 
      isYouTube: false 
    },
    { 
      title: "Conclusion et prochaines étapes", 
      url: "https://media.istockphoto.com/id/482389552/fr/vid%C3%A9o/vue-a%C3%A9rienne-de-vtt-sur-le-toit-au-coucher-du-soleil.mp4?s=mp4-640x640-is&k=20&c=vgppuUgv4-IJ4wfrkQFAByXXwCFB_bSgV0QXvHfwRlw=", 
      isYouTube: false 
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [credits, setCredits] = useState(3); // Start with 3 credits
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // When the index changes, update the video source
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    if (credits > 0) {
      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
        setCredits(credits - 1); // Decrease a credit when a video ends
      } else {
        alert("Félicitations ! Vous avez terminé la formation.");
      }
    } else {
      alert("Vous n'avez plus de crédits. Vous pouvez redémarrer.");
    }
  };

  return (
    <div className="formation-page py-10 lg:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Formation : <span className="text-yellow-500">Apprenez en Vidéo</span>
          </h2>
        </div>
        <div className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white">
          Suivez une série de vidéos pour maîtriser les compétences essentielles.
        </div>

        {/* Video player */}
        <div className="my-8 border rounded-3xl border-gray-900/10 dark:border-gray-100/10 p-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {videos[currentVideoIndex].title}
          </h3>
          <div>
            {videos[currentVideoIndex].isYouTube ? (
              // Embed YouTube video with iframe
              <iframe
                width="100%"
                height="360"
                src={videos[currentVideoIndex].url}
                title={videos[currentVideoIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Local video
              <video
                ref={videoRef}
                controls
                style={{ width: "100%", height: "360px" }}
                onEnded={handleVideoEnd}
              >
                <source src={videos[currentVideoIndex].url} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
              </video>
            )}
          </div>
        </div>

        {/* Video list */}
        <div className="my-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Liste des vidéos</h3>
          <ul className="mt-4 space-y-3">
            {videos.map((video, index) => (
              <li
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`cursor-pointer p-3 rounded-lg text-lg font-semibold 
                  ${
                    index === currentVideoIndex
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  }`}
              >
                {index + 1}. {video.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Credits display */}
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Crédits restants : {credits}</p>
        </div>
      </div>
    </div>
  );
};

export default ModellingMasterPage;

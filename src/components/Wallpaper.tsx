import { useEffect, useRef, useState } from 'react';

import bg from '../assets/bg.jpg';
import bgVideo from '../assets/bg.mov';

export default function Wallpaper() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoCanPlay, setVideoCanPlay] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoCanPlay = () => {
      setVideoCanPlay(true);
    };

    const handleVideoError = () => {
      setVideoCanPlay(false);
    };

    if (video) {
      video.oncanplay = handleVideoCanPlay;
      video.onerror = handleVideoError;

      video.play();
    }

    return () => {
      if (video) {
        video.oncanplay = null;
        video.onerror = null;
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-50">
      {videoCanPlay ? (
        <video
          ref={videoRef}
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={bg}
        />
      ) : (
        <img
          src={bg}
          alt="Background image"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

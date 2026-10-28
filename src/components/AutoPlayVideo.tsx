import { useEffect, useRef, useState } from "react";

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Ne charge la vidéo que lorsqu'elle approche de l'écran */
  lazy?: boolean;
}

const AutoPlayVideo = ({ src, poster, className, lazy = false }: AutoPlayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return;
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [lazy]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;
    // React ne pose pas l'attribut HTML "muted" : iOS Safari bloque l'autoplay sans lui
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.play().catch(() => {
      // Autoplay bloqué (ex. mode économie d'énergie) : le poster reste affiché
    });
  }, [shouldLoad, src]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload={lazy ? "none" : "auto"}
      disablePictureInPicture
      className={className}
    />
  );
};

export default AutoPlayVideo;

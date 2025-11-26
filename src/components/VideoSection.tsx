import React, { useState, useRef } from "react";
import { Play } from "lucide-react";
import mainVideo from "../assets/videos/main-video.mp4";

type VideoSectionProps = {
  videoSrc?: string;
  title?: string;
  className?: string;
};

/**
 * VideoSection: contiene un video verticale responsive (9:16).
 * Usage: <VideoSection title="Titolo video" />
 */
const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc = mainVideo,
  title = "Video presentazione",
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section
      id="video-section"
      className="py-8 md:py-20"
      aria-label="Chi è Marco Del Moro"
    >
      <div className="container mx-auto px-2 md:px-6">
        {/* Wrapper per mantenere il rapporto 9:16 (video verticale) */}
        <div className="flex justify-center">
          <div
            className="relative w-full md:max-w-[500px]"
            style={{
              height: "90vh",
              maxHeight: "90vh"
            }}
          >
            <div className="relative w-full h-full bg-black">
              <video
                ref={videoRef}
                title={title}
                src={videoSrc}
                controls
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onClick={handleVideoClick}
                className="w-full h-full object-cover md:object-contain cursor-pointer"
                aria-label={title}
              >
                Il tuo browser non supporta il tag video.
              </video>

              {/* Icona Play personalizzata - solo su desktop */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="hidden md:flex absolute inset-0 items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                  aria-label="Riproduci video"
                >
                  <div className="w-32 h-32 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-16 h-16 text-black ml-2" fill="currentColor" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
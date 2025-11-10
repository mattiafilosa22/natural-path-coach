import React from "react";

type VideoSectionProps = {
  videoId?: string;
  title?: string;
  className?: string;
  lazy?: boolean;
};

/**
 * VideoSection: contiene un iframe YouTube responsive (16:9).
 * Usage: <VideoSection videoId="M7lc1UVf-VE" title="Titolo video" />
 */
const VideoSection: React.FC<VideoSectionProps> = ({
  videoId = "mpL7e0_jLXQ?si=DEKfAOSibyMievL_",
  title = "Video YouTube",
  className = "",
  lazy = true,
}) => {
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <section
      id="video-section"
      className="py-20"
      aria-label="Chi è Marco Del Moro"
    >
      <div className="container mx-auto px-6">
      {/* Wrapper per mantenere il rapporto 16:9 */}
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          title={title}
          src={iframeSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading={lazy ? "lazy" : undefined}
        />
      </div>
      </div>
    </section>
  );
};

export default VideoSection;
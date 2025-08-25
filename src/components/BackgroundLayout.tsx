import { ReactNode } from "react";
import trainerBackground from "@/assets/trainer-background.jpg";

interface BackgroundLayoutProps {
  children: ReactNode;
  showOverlay?: boolean;
  imagePosition?: string;
}

export const BackgroundLayout = ({ children, showOverlay = true, imagePosition }: BackgroundLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={trainerBackground}
          alt="Marco Del Moro durante un allenamento di natural bodybuilding"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: imagePosition || 'center center',
          }}
        />
      </div>

      {/* Orange Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-fitness-overlay" />
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col py-6 py-md-0">
        {children}
      </div>
    </div>
  );
};
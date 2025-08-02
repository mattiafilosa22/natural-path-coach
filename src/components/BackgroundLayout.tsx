import { ReactNode } from "react";
import trainerBackground from "@/assets/trainer-background.jpg";

interface BackgroundLayoutProps {
  children: ReactNode;
  showOverlay?: boolean;
}

export const BackgroundLayout = ({ children, showOverlay = true }: BackgroundLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${trainerBackground})` }}
      />

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
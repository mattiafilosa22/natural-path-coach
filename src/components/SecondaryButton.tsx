import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "light" | "dark";
}

export const SecondaryButton = ({ 
  children, 
  onClick, 
  className, 
  disabled = false,
  size = "default",
  variant = "light"
}: SecondaryButtonProps) => {
  const baseClasses = "font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl whitespace-normal text-center leading-tight";
  
  const variantClasses = variant === "light" 
    ? "bg-white text-gray-600 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
    : "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50";

  const sizeClasses = size === "lg" 
    ? "px-6 md:px-8 py-6 md:py-8 text-lg md:text-xl"
    : size === "sm"
    ? "px-4 py-2 text-sm"
    : "px-6 py-3 text-base";

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        className
      )}
    >
      {children}
    </Button>
  );
};

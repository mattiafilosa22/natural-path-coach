import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FitnessButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "default" | "sm" | "lg";
}

export const FitnessButton = ({ 
  children, 
  onClick, 
  className, 
  disabled = false,
  size = "default"
}: FitnessButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={cn(
        "bg-fitness-white text-fitness-orange border-2 border-fitness-orange font-semibold hover:bg-fitness-orange hover:text-fitness-white transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl",
        className
      )}
    >
      {children}
    </Button>
  );
};
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    /** Whether to apply hover effect */
    interactive?: boolean;
}

/**
 * Clean card component per updated education-focused design system
 * 
 * Recipe: White bg, subtle border, soft shadow
 */
export function Card({ children, className, interactive = false }: CardProps) {
    return (
        <div
            className={cn(
                // Base clean card
                "bg-bg-SURFACE",
                "border border-border",
                "shadow-sm rounded-xl",
                // Interactive hover state
                interactive && [
                    "transition-all duration-200",
                    "hover:border-brand-primary/30",
                    "hover:shadow-md",
                ],
                className
            )}
        >
            {children}
        </div>
    );
}

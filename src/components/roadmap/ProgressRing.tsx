"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface ProgressRingProps {
    progress: number; // 0-100
    size?: number; // diameter in pixels
    strokeWidth?: number;
    color?: string;
    backgroundColor?: string;
    children?: ReactNode;
    className?: string;
}

export default function ProgressRing({
    progress,
    size = 120,
    strokeWidth = 8,
    color = "#0EA5E9", // brand-primary / sky-500
    backgroundColor = "#E7E5E4", // stone-200
    children,
    className = ""
}: ProgressRingProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={false}
                    animate={isMounted ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}

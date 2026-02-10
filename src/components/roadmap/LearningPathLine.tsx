"use client";

import { motion } from "framer-motion";

interface LearningPathLineProps {
    isCompleted?: boolean;
    height?: number;
    className?: string;
}

export default function LearningPathLine({
    isCompleted = false,
    height = 80,
    className = ""
}: LearningPathLineProps) {
    const strokeColor = isCompleted ? "#22C55E" : "#E7E5E4"; // green-500 : stone-200
    const strokeWidth = 3;

    return (
        <div className={`flex justify-center ${className}`} style={{ height }}>
            <svg width={strokeWidth} height={height} className="overflow-visible">
                <motion.line
                    x1={strokeWidth / 2}
                    y1={0}
                    x2={strokeWidth / 2}
                    y2={height}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={isCompleted ? "0" : "8 4"}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                />
            </svg>
        </div>
    );
}

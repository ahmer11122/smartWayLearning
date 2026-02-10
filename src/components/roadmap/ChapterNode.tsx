"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export interface ChapterData {
    slug: string;
    title: string;
    urduTitle: string;
    description: string;
    urduDescription: string;
    duration: string;
    status: "completed" | "in-progress" | "available" | "locked";
    progress?: number; // 0-100
    chapterNumber: number;
    lessonCount?: number;
}

interface ChapterNodeProps {
    chapter: ChapterData;
    index: number;
}

const SPRING_TACTILE = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1
};

export default function ChapterNode({ chapter, index }: ChapterNodeProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLocked = chapter.status === "locked";
    const isCompleted = chapter.status === "completed";
    const isInProgress = chapter.status === "in-progress";
    const progress = chapter.progress || 0;

    // Status-based styling
    const getStatusColor = () => {
        switch (chapter.status) {
            case "completed": return "#22C55E"; // green-500
            case "in-progress": return "#0EA5E9"; // sky-500
            case "available": return "#0EA5E9"; // sky-500
            default: return "#A8A29E"; // stone-400
        }
    };

    const CardContent = (
        <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, ...SPRING_TACTILE }}
            whileHover={!isLocked ? { y: -2 } : {}}
            className={`group relative overflow-hidden bg-bg-SURFACE border rounded-xl transition-all duration-300
                ${isLocked
                    ? "border-stone-200 opacity-50 cursor-not-allowed"
                    : "border-stone-200 hover:border-sky-300 hover:shadow-sm"
                }
            `}
        >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8">
                {/* Chapter Number */}
                <div className="flex-shrink-0">
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Chapter</div>
                    <div className="text-3xl font-bold text-text-PRIMARY">{String(chapter.chapterNumber).padStart(2, '0')}</div>
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0 space-y-3">
                    {/* Title & Description */}
                    <div className="space-y-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-text-PRIMARY leading-tight">
                            {chapter.title}
                        </h3>
                        <p className="text-sm text-text-SECONDARY leading-relaxed">
                            {chapter.description}
                        </p>
                    </div>

                    {/* Urdu Title */}
                    <p className="font-urdu text-2xl lg:text-3xl text-brand-primary leading-[1.6] text-right" dir="rtl">
                        {chapter.urduTitle}
                    </p>
                </div>

                {/* Action Indicator */}
                {!isLocked && (
                    <div className="flex items-center">
                        <ChevronRight className="w-6 h-6 text-stone-300 group-hover:text-sky-500 transition-all group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                )}
            </div>
        </motion.div>
    );

    // Wrap in Link if not locked
    return isLocked ? (
        CardContent
    ) : (
        <Link href={`/lesson/${chapter.slug}`} className="block">
            {CardContent}
        </Link>
    );
}

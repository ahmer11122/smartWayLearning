"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPRING_TACTILE } from "@/lib/animations";

type Language = "en" | "ur";

interface LanguageTabsProps {
    /** English content */
    english: ReactNode;
    /** Urdu content */
    urdu: ReactNode;
    /** Default selected language */
    defaultLanguage?: Language;
    className?: string;
}

const TAB_LABELS: Record<Language, string> = {
    en: "English",
    ur: "اردو",
};

/**
 * Mobile Bilingual Layout (<1024px): Sticky tab switcher with slide animation
 * 
 * Clean education design:
 * - Sticky Tab Bar at top
 * - AnimatePresence with mode="wait" for language switching
 * - Horizontal slide animation between languages
 */
export function LanguageTabs({
    english,
    urdu,
    defaultLanguage = "en",
    className,
}: LanguageTabsProps) {
    const [activeLanguage, setActiveLanguage] = useState<Language>(defaultLanguage);
    const shouldReduceMotion = useReducedMotion();

    const transition = shouldReduceMotion ? { duration: 0 } : SPRING_TACTILE;

    // Slide direction based on language change
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    const direction = activeLanguage === "ur" ? 1 : -1;

    return (
        <div className={cn("lg:hidden", className)}>
            {/* Sticky Tab Bar */}
            <div
                className={cn(
                    "sticky top-0 z-10",
                    "bg-bg-SURFACE/95 backdrop-blur-sm",
                    "border-b border-border",
                    "px-4 py-3"
                )}
            >
                <div
                    role="tablist"
                    className={cn(
                        "flex gap-1",
                        "bg-bg-ELEVATED rounded-lg p-1"
                    )}
                >
                    {(["en", "ur"] as const).map((lang) => (
                        <button
                            key={lang}
                            role="tab"
                            aria-selected={activeLanguage === lang}
                            onClick={() => setActiveLanguage(lang)}
                            className={cn(
                                "flex-1 py-2 px-4 rounded-md",
                                "text-sm font-medium transition-all",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                                activeLanguage === lang
                                    ? "bg-brand-primary text-white shadow-sm"
                                    : "text-text-SECONDARY hover:text-text-PRIMARY hover:bg-bg-MUTED"
                            )}
                        >
                            {TAB_LABELS[lang]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Panel with Slide Animation */}
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={activeLanguage}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeLanguage}`}
                    >
                        {activeLanguage === "en" ? (
                            <section
                                lang="en"
                                dir="ltr"
                                className="px-4 py-6 font-sans leading-normal"
                            >
                                {english}
                            </section>
                        ) : (
                            <section
                                lang="ur"
                                dir="rtl"
                                className="px-5 py-8 font-urdu leading-[2.2] text-right text-lg"
                            >
                                {urdu}
                            </section>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

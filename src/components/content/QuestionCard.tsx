"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { SPRING_EXPAND, STAGGER_CONTAINER, STAGGER_ITEM, BUTTON_TAP } from "@/lib/animations";

interface QuestionCardProps {
    id: string;
    question: ReactNode;
    children: ReactNode;
    /** Default expanded state */
    defaultOpen?: boolean;
}

/**
 * Interactive expandable Q&A card with spring physics
 * 
 * Clean education design with subtle interactions
 * 
 * Accessibility:
 * - Button with aria-expanded
 * - Content panel with aria-labelledby
 * 
 * Animation:
 * - Spring physics (stiffness: 300, damping: 30)
 * - Staggered content fade-in
 * - Respects prefers-reduced-motion
 */
export function QuestionCard({ id, question, children, defaultOpen = false }: QuestionCardProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const shouldReduceMotion = useReducedMotion();

    const headerId = `${id}-header`;
    const panelId = `${id}-panel`;

    // Respect reduced motion preference
    const transition = shouldReduceMotion ? { duration: 0 } : SPRING_EXPAND;

    return (
        <Card interactive className="overflow-hidden">
            <motion.button
                id={headerId}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                whileTap={shouldReduceMotion ? undefined : BUTTON_TAP}
                className={cn(
                    "w-full px-6 py-5 lg:px-8 lg:py-6",
                    "flex items-center justify-between gap-4",
                    "text-left text-lg lg:text-xl font-medium text-text-PRIMARY",
                    // Focus ring for accessibility
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-SURFACE",
                    "cursor-pointer"
                )}
            >
                <div className="w-full text-left">{question}</div>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={transition}
                    className="text-text-TERTIARY flex-shrink-0"
                >
                    <ChevronDown size={20} strokeWidth={1.5} />
                </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={transition}
                        className="overflow-hidden"
                    >
                        <motion.div
                            variants={STAGGER_CONTAINER}
                            initial="hidden"
                            animate="visible"
                            className="px-6 pb-6 pt-2 text-text-SECONDARY text-base leading-relaxed border-t border-border-light"
                        >
                            <motion.div variants={STAGGER_ITEM}>
                                {children}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
}

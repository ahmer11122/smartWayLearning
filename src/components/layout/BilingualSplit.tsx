import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BilingualSplitProps {
    /** English content (Left pane) */
    english: ReactNode;
    /** Urdu content (Right pane) */
    urdu: ReactNode;
    className?: string;
}

/**
 * Desktop Bilingual Layout (>1024px): Two-column split view
 * 
 * Clean education design:
 * - Left: English (ltr)
 * - Right: Urdu (rtl), Gulzar font, 1.8 line-height
 * - Divider: subtle border
 * 
 * This component only renders on desktop.
 * Use with LanguageTabs for mobile.
 */
export function BilingualSplit({ english, urdu, className }: BilingualSplitProps) {
    return (
        <div
            className={cn(
                "hidden lg:grid lg:grid-cols-2",
                "gap-0",
                className
            )}
        >
            {/* English Pane (Left) */}
            <section
                lang="en"
                dir="ltr"
                className={cn(
                    "px-6 py-8 lg:px-12 lg:py-10",
                    "font-sans leading-relaxed",
                    "border-r border-border"
                )}
            >
                {english}
            </section>

            {/* Urdu Pane (Right) */}
            <section
                lang="ur"
                dir="rtl"
                className={cn(
                    "px-6 py-8 lg:px-12 lg:py-10",
                    "font-urdu leading-[2.2] text-lg lg:text-xl",
                    "text-right"
                )}
            >
                {urdu}
            </section>
        </div>
    );
}

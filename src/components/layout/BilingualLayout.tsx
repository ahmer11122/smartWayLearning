import { type ReactNode } from "react";
import { BilingualSplit } from "./BilingualSplit";
import { LanguageTabs } from "./LanguageTabs";

interface BilingualLayoutProps {
    /** English content */
    english: ReactNode;
    /** Urdu content */
    urdu: ReactNode;
    className?: string;
}

/**
 * Responsive Bilingual Layout
 * 
 * Automatically switches between:
 * - Desktop (≥1024px): BilingualSplit (two-column)
 * - Mobile (<1024px): LanguageTabs (tab switcher)
 */
export function BilingualLayout({ english, urdu, className }: BilingualLayoutProps) {
    return (
        <>
            <BilingualSplit english={english} urdu={urdu} className={className} />
            <LanguageTabs english={english} urdu={urdu} className={className} />
        </>
    );
}

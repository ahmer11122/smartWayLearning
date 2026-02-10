"use client";

import { ReactNode } from "react";

interface SimpleContentRendererProps {
    children: ReactNode;
}

/**
 * Simple content renderer for course-02 lessons
 * Renders MDX content with bilingual styling
 */
export function SimpleContentRenderer({ children }: SimpleContentRendererProps) {
    return (
        <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
                {children}
            </div>
        </div>
    );
}

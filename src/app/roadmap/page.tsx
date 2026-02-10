"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import ChapterNode, { ChapterData } from "@/components/roadmap/ChapterNode";

// Mock data - will be replaced with real data from backend
const chapters: ChapterData[] = [
    {
        slug: "intro",
        title: "Introduction to Markets",
        urduTitle: "مارکیٹوں کا تعارف",
        description: "Understanding the difference between physical, online, stock, and digital markets.",
        urduDescription: "فزیکل، آن لائن، اسٹاک اور ڈیجیٹل مارکیٹوں کے درمیان فرق کو سمجھنا",
        duration: "10 mins",
        status: "in-progress",
        progress: 45,
        chapterNumber: 1,
        lessonCount: 3
    },
    {
        slug: "lesson-01-intro-forex",
        title: "Basic Forex Course",
        urduTitle: "فاریکس کی بنیادی تعلیم",
        description: "Learn the basics of foreign exchange markets and currency pairs.",
        urduDescription: "غیر ملکی کرنسی کی منڈیوں اور کرنسی کے جوڑوں کی بنیادی باتیں سیکھیں",
        duration: "15 mins",
        status: "available",
        chapterNumber: 2,
        lessonCount: 5
    },
    {
        slug: "technical-analysis",
        title: "Technical Analysis & Chart Patterns",
        urduTitle: "تکنیکی تجزیہ اور چارٹ پیٹرن",
        description: "Master the art of reading charts and identifying trading opportunities.",
        urduDescription: "چارٹس پڑھنے اور تجارتی مواقع کی شناخت کا فن سیکھیں",
        duration: "20 mins",
        status: "locked",
        chapterNumber: 3,
        lessonCount: 7
    },
    {
        slug: "risk-management",
        title: "Risk Management Strategies",
        urduTitle: "رسک مینجمنٹ کی حکمت عملی",
        description: "Learn how to protect your capital and manage trading risks effectively.",
        urduDescription: "اپنے سرمائے کی حفاظت اور تجارتی خطرات کو مؤثر طریقے سے منظم کرنا سیکھیں",
        duration: "18 mins",
        status: "locked",
        chapterNumber: 4,
        lessonCount: 6
    }
];

// Calculate overall stats
const totalChapters = chapters.length;
const completedChapters = chapters.filter(c => c.status === "completed").length;
const overallProgress = Math.round((completedChapters / totalChapters) * 100);
const currentStreak = 3; // Mock data

const SPRING_TACTILE = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1
};

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-bg-APP font-sans">
            {/* Header */}
            <header className="bg-bg-SURFACE border-b border-stone-200">
                <div className="mx-auto px-8 py-10 lg:px-16 xl:px-24">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-text-SECONDARY hover:text-brand-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="font-medium text-sm">Back to Institute</span>
                    </Link>

                    <h1 className="text-3xl lg:text-4xl font-bold text-text-PRIMARY">
                        Complete Course
                    </h1>
                </div>
            </header>

            {/* Learning Path */}
            <section className="mx-auto px-8 py-12 lg:px-16 xl:px-24">
                <div className="space-y-4">
                    {chapters.map((chapter, index) => (
                        <ChapterNode key={chapter.slug} chapter={chapter} index={index} />
                    ))}

                    {/* Future Content Teaser */}
                    <motion.div
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 p-8 border border-dashed border-stone-300 rounded-xl text-center space-y-3 bg-stone-50/30"
                    >
                        <GraduationCap className="w-10 h-10 text-stone-400 mx-auto" />
                        <div className="space-y-1">
                            <h4 className="text-lg font-bold text-text-PRIMARY">More Chapters Coming Soon</h4>
                            <p className="font-urdu text-xl text-text-SECONDARY" dir="rtl">مزید چیپٹرز جلد آرہے ہیں</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

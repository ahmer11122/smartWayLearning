import { getLesson } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Course01Content } from "@/components/lessons/Course01Content";
import { Course02Content } from "@/components/lessons/Course02Content";

/**
 * Lesson page - dynamically renders content based on course
 * Course 1: Introduction to Markets
 * Course 2: Basic Forex Course
 */
export default async function LessonPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    
    // Determine course ID based on lesson naming convention
    const courseId = slug.startsWith('lesson-') ? 'course-02' : 'course-01';
    
    const lesson = await getLesson(slug, courseId);

    if (!lesson) {
        return (
            <main className="min-h-screen bg-bg-APP p-8 text-text-PRIMARY">
                <p>Lesson not found</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-bg-APP">
            {/* Header */}
            <header className="border-b border-border bg-bg-SURFACE lg:static">
                <div className="px-6 py-8 lg:px-12 lg:py-12">
                    {/* Back Button */}
                    <Link
                        href="/roadmap"
                        className="inline-flex items-center gap-2 text-text-SECONDARY hover:text-brand-primary transition-colors mb-6 group"
                    >
                        <div className="p-2 rounded-full bg-border/50 group-hover:bg-brand-primary/10 transition-colors">
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        </div>
                        <span className="font-medium">Back to Roadmap</span>
                    </Link>

                    <div className="flex flex-col gap-4 lg:gap-6">
                        <h1 className="text-3xl lg:text-5xl font-bold text-text-PRIMARY">
                            {lesson.title}
                        </h1>
                        {lesson.translation?.urduTitle && (
                            <p
                                className="font-urdu text-2xl lg:text-4xl text-text-SECONDARY leading-[2]"
                                dir="rtl"
                            >
                                {lesson.translation.urduTitle}
                            </p>
                        )}
                    </div>
                </div>
            </header>

            {/* Dynamic Content Based on Course */}
            {courseId === 'course-01' && <Course01Content />}
            {courseId === 'course-02' && <Course02Content />}
        </main>
    );
}

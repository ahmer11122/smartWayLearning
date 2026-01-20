import { getLesson } from '@/lib/content';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{
        course: string;
        slug: string;
    }>;
}

export default async function LessonPage({ params }: PageProps) {
    const { course, slug } = await params;
    const lesson = await getLesson(slug, course);

    if (!lesson) {
        notFound();
    }

    return (
        <article className="prose prose-stone lg:prose-lg max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-4 font-sans text-text-PRIMARY">{lesson.title}</h1>

            {lesson.translation && (
                <div className="bg-bg-ELEVATED border-l-4 border-brand-primary p-6 rounded-r-xl my-8">
                    <h2 className="text-2xl font-bold font-urdu rtl:text-right text-text-PRIMARY" dir="rtl">
                        {lesson.translation.urduTitle || lesson.translation.title}
                    </h2>
                    {lesson.translation.description && (
                        <p className="mt-2 text-text-SECONDARY rtl:text-right font-urdu text-lg leading-relaxed" dir="rtl">
                            {lesson.translation.description}
                        </p>
                    )}
                </div>
            )}

            <div className="mt-8 border-t border-border pt-8">
                {/* Placeholder for MDX Content Rendering */}
                <p className="italic text-text-TERTIARY">
                    Content for {course}/{slug} will be rendered here.
                </p>
            </div>
        </article>
    );
}

import { readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { LessonSchema, CourseSchema } from './schema';
import { z } from 'zod';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

export type Lesson = z.infer<typeof LessonSchema>;

export async function getLesson(slug: string, courseId: string = 'course-01'): Promise<Lesson | null> {
    const filePath = path.join(CONTENT_DIR, courseId, `${slug}.mdx`);

    try {
        await access(filePath);
    } catch {
        return null;
    }

    const fileContent = await readFile(filePath, 'utf-8');
    const { data } = matter(fileContent);

    // Strict validation
    const result = LessonSchema.safeParse(data);

    if (!result.success) {
        console.error(`Validation failed for ${filePath}:`, result.error);
        throw new Error(`Invalid frontmatter in ${filePath}: ${result.error.format()}`);
    }

    return result.data;
}

export async function getAllLessons(courseId: string = 'course-01'): Promise<Lesson[]> {
    const courseDir = path.join(CONTENT_DIR, courseId);

    try {
        const files = await readdir(courseDir);
        const mdxFiles = files.filter(file => file.endsWith('.mdx'));

        const lessons = await Promise.all(mdxFiles.map(async (file) => {
            const slug = file.replace('.mdx', '');
            return await getLesson(slug, courseId);
        }));

        return lessons.filter((l): l is Lesson => l !== null);
    } catch (error) {
        return [];
    }
}

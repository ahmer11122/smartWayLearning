import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg-APP p-4 text-text-PRIMARY">
      <div className="relative overflow-hidden rounded-2xl bg-bg-SURFACE p-8 shadow-lg border border-border sm:p-12 md:p-16 max-w-2xl w-full">
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <div className="rounded-full bg-brand-primary/10 p-4">
            <BookOpen className="h-8 w-8 text-brand-primary" />
          </div>

          <div className="space-y-4">
            <h1 className="font-sans text-4xl font-bold tracking-tight text-text-PRIMARY sm:text-5xl">
              Forex Learning <span className="text-brand-primary">Hub</span>
            </h1>
            <p className="font-urdu text-3xl text-text-SECONDARY sm:text-4xl" dir="rtl">
              غیر ملکی کرنسی سیکھنے کا مرکز
            </p>
          </div>

          <p className="text-text-SECONDARY max-w-md">
            Master forex trading with our bilingual curriculum.
            Learn at your own pace in English and Urdu.
          </p>

          <div className="mt-4 flex gap-4">
            <a
              href="/lesson"
              className="rounded-lg bg-brand-primary px-6 py-3 font-sans font-semibold text-white transition-all hover:bg-brand-primary/90 active:scale-[0.98] shadow-sm"
            >
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

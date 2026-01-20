import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg-APP p-4 text-text-PRIMARY">
      <div className="relative overflow-hidden rounded-2xl bg-bg-SURFACE p-8 ring-1 ring-white/5 sm:p-12 md:p-16">
        {/* Glow Effects */}
        <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-brand-cyan/20 blur-[100px]" />
        <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-brand-indigo/20 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <div className="rounded-full bg-bg-ELEVATED p-4 ring-1 ring-white/10">
            <Terminal className="h-8 w-8 text-brand-cyan" />
          </div>

          <div className="space-y-4">
            <h1 className="font-sans text-4xl font-bold tracking-tight sm:text-5xl">
              Forex Learning <span className="text-brand-cyan">Hub</span>
            </h1>
            <p className="font-urdu text-3xl text-text-SECONDARY sm:text-4xl" dir="rtl">
              غیر ملکی کرنسی سیکھنے کا مرکز
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-brand-cyan px-6 py-3 font-sans font-semibold text-bg-APP transition-transform active:scale-95 hover:bg-brand-cyan/90">
              Get Started
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-sans font-semibold text-text-PRIMARY transition-colors hover:bg-white/10">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

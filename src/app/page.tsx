import { ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-APP">
      {/* Hero Section - Full Screen with Background */}
      <section className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/visuals/hero-background.webp"
            alt="Smart Way Learning Institute Campus"
            className="w-full h-full object-cover scale-105 animate-slow-pan" // Added slow subtle movement if possible, or just scale
          />
          {/* Enhanced Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content - Glass Card Strategy */}
        <div className="relative z-10 px-6 py-12 lg:px-24 xl:px-32 w-full max-w-[90rem] mx-auto mt-16 md:mt-0">
          <div className="max-w-4xl">
            {/* Glass Container */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl group-hover:bg-brand-primary/30 transition-all duration-1000" />

              <div className="relative space-y-10">

                {/* Main Typography Block */}
                <div className="space-y-4">
                  <h1 className="text-white leading-tight">
                    <span
                      className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Smart Way
                    </span>
                    <span
                      className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-italic font-light text-white/90"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Learning Institute
                    </span>
                  </h1>

                  {/* Divider */}
                  <div className="w-24 h-1.5 bg-brand-primary my-8 rounded-full" />

                  {/* Urdu Title - Refined */}
                  <h2
                    className="font-urdu text-4xl sm:text-5xl lg:text-6xl text-white/95 leading-[1.8] drop-shadow-sm"
                    dir="rtl"
                  >
                    اسمارٹ وے لرننگ انسٹی ٹیوٹ
                  </h2>
                </div>

                {/* Description */}
                <p className="text-xl lg:text-2xl text-white/70 font-sans leading-relaxed max-w-2xl">
                  Professional forex trading education made simple for everyone.
                </p>

                {/* Actions */}
                <div className="pt-6">
                  <a
                    href="/roadmap"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-primary text-white font-medium text-xl rounded-xl hover:bg-brand-primary/90 transition-all duration-300 shadow-lg shadow-brand-primary/25 hover:translate-y-[-2px] hover:shadow-xl group"
                  >
                    <GraduationCap className="w-6 h-6" />
                    <span>Start Learning</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

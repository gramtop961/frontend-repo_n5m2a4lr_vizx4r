import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 px-3 py-1 text-xs font-bold shadow-[4px_4px_0_#111]">
            <Sparkles size={14} /> Interactive • Neo‑Brutalism • Modern
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building playful, technical experiences for the web
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            I blend code, design, and 3D to craft responsive products with personality. Explore selected projects
            and get in touch to create something memorable.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber-300 text-neutral-900 px-5 py-3 font-extrabold border-2 border-neutral-900 shadow-[6px_6px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#111] transition-transform"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-5 py-3 font-extrabold border-2 border-neutral-900 dark:border-white shadow-[6px_6px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#111] transition-transform"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['React', 'FastAPI', 'MongoDB', 'Spline', 'Tailwind'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-emerald-200/80 dark:bg-emerald-300/20 border-2 border-neutral-900 dark:border-white text-sm font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[360px] sm:h-[480px] lg:h-[520px] rounded-xl border-2 border-neutral-900 dark:border-white bg-gradient-to-br from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 shadow-[10px_10px_0_#111]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-neutral-900/40 rounded-xl" />
        </div>
      </div>
    </section>
  );
}

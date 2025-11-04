import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-xl border-2 border-neutral-900 dark:border-white bg-emerald-200 p-6 shadow-[10px_10px_0_#111] dark:bg-emerald-300/20">
            <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white">Let’s build something bold</h3>
            <p className="mt-2 text-neutral-800 dark:text-neutral-300">
              I love working on expressive, performance‑minded products. Reach out and share your idea.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-5 py-3 font-extrabold text-neutral-900 dark:text-white border-2 border-neutral-900 dark:border-white shadow-[6px_6px_0_#111]"
            >
              <Mail size={18} /> hello@example.com
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-[4px_4px_0_#111]"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-[4px_4px_0_#111]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div id="about" className="rounded-xl border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 p-6 shadow-[10px_10px_0_#111]">
            <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white">About me</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              I’m a front‑end engineer and creative developer focused on expressive interfaces. My approach blends
              clear UX, bold visual language, and robust engineering.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                'Performance‑first mindset',
                'Accessible by default',
                'Design systems & theming',
                '3D & motion on the web',
              ].map((x) => (
                <li key={x} className="rounded-md border-2 border-neutral-900 dark:border-white px-3 py-2 font-bold bg-amber-100 dark:bg-amber-300/10">
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Currently exploring playful 3D interactions with Spline and pushing neo‑brutalist UI patterns.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} NeoFolio • Built with love, code, and chunky shadows.
        </p>
      </div>
    </section>
  );
}

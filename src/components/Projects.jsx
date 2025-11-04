import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Hologrid Dashboard',
    description: 'A neo-brutalist admin with tactile interactions, 3D status tiles, and delightful micro‑motion.',
    tags: ['React', 'Spline', 'Tailwind'],
    color: 'bg-amber-200',
    url: '#',
  },
  {
    title: 'Pulse UI Kit',
    description: 'Component library featuring chunky borders, bold shadows, and accessible primitives.',
    tags: ['Design', 'Accessibility', 'Radix'],
    color: 'bg-emerald-200',
    url: '#',
  },
  {
    title: 'Vector Lab',
    description: 'Creative playground for SVG morphing, filters, and generative shapes.',
    tags: ['SVG', 'Canvas', 'Animations'],
    color: 'bg-sky-200',
    url: '#',
  },
  {
    title: 'Realtime Boards',
    description: 'Collaborative whiteboard with low-latency drawing and presence cursors.',
    tags: ['WebSockets', 'FastAPI', 'MongoDB'],
    color: 'bg-pink-200',
    url: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">Selected Projects</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">
              Bold, fast, and expressive. Built with performance and personality across devices.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-4 font-extrabold text-neutral-900 dark:text-white border-2 border-neutral-900 dark:border-white shadow-[6px_6px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#111] transition-transform"
          >
            Work with me
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target={p.url.startsWith('http') ? '_blank' : undefined}
              rel={p.url.startsWith('http') ? 'noreferrer' : undefined}
              className={`group relative rounded-xl border-2 border-neutral-900 dark:border-white ${p.color} dark:[&>*]:bg-neutral-900 p-4 shadow-[8px_8px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#111] transition-transform`}
            >
              <div className="rounded-md bg-white/70 dark:bg-neutral-900 p-4 border-2 border-neutral-900 dark:border-white">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white">{p.title}</h3>
                  <ExternalLink size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-bold px-2 py-1 rounded-md bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-xl border-2 border-neutral-900 dark:border-white bg-gradient-to-r from-amber-200 to-pink-200 dark:from-amber-300/20 dark:to-pink-300/20 p-6 shadow-[10px_10px_0_#111]">
          <p className="text-neutral-900 dark:text-white font-extrabold text-lg">
            Like what you see? I’m available for freelance and full‑time opportunities.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-4 py-2 font-extrabold border-2 border-neutral-900 dark:border-white shadow-[6px_6px_0_#111]"
          >
            Let’s talk
          </a>
        </div>
      </div>
    </section>
  );
}

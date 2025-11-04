import { useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-extrabold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-300 text-neutral-900 shadow-[6px_6px_0_#111]">
              <Rocket size={18} />
            </span>
            <span className="text-lg">NeoFolio</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-[4px_4px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-transform"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-[4px_4px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-[4px_4px_0_#111]"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-semibold bg-amber-200/60 dark:bg-amber-300/20 border-2 border-neutral-900 dark:border-white shadow-[4px_4px_0_#111]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

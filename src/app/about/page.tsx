import type { Metadata } from "next";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Slobodan Markoski",
  description: "Self-taught developer passionate about clean code and great user experiences.",
};

const stack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Router"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    category: "Tooling",
    items: ["Git", "Vite", "Vitest", "Vercel", "Linux"],
  },
];


export default function AboutPage() {
  return (
    <section className="min-h-screen relative px-6 py-20 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-20">
        {/* Intro */}
        <div>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h1 className="font-space text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Hi, I&apos;m <span className="gradient-text">Slobodan</span>
          </h1>

          <div className="glass rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div className="shrink-0 w-28 h-28 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-4xl font-space font-bold gradient-text select-none">
              SM
            </div>

            <div className="flex flex-col gap-4 text-neutral-400 leading-relaxed">
              <p>
                I&apos;m a developer based in Macedonia, focused on building fast, accessible, and
                maintainable web applications. I got into coding out of curiosity and never stopped —
                I care about the details, from pixel-perfect UI to clean API design.
              </p>
              <p>
                I&apos;m currently looking for my first professional opportunity. When I&apos;m not
                building projects I&apos;m usually reading about systems design, tinkering with Linux
                configs, or exploring the mountains nearby.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-5 pt-1">
                <a
                  href="https://github.com/bobson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/slobodan-markoski-93ab0517a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:bmarkoski@gmail.com"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="font-space text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">
            Tech Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {stack.map(({ category, items }) => (
              <div key={category} className="glass rounded-2xl p-6 flex flex-col gap-3">
                <p className="font-space text-sm font-semibold text-violet-400">
                  {category}
                </p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-10 text-center flex flex-col items-center gap-5">
          <h2 className="font-space text-2xl font-bold">Want to work together?</h2>
          <p className="text-neutral-400 max-w-sm">
            I&apos;m looking for my first professional opportunity. If you think I&apos;d be a good fit,
            let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

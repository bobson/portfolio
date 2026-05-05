"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const roles = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Node.js Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        {/* Heading */}
        <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Hi, I&apos;m <span className="gradient-text">Slobodan Markoski</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center">
          <p className="font-space text-2xl md:text-3xl text-neutral-300 font-medium">
            {displayed}
            <span className="ml-0.5 inline-block w-0.5 h-7 bg-violet-400 align-middle animate-pulse" />
          </p>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
          I build fast, beautiful, and scalable web applications. Passionate
          about clean code and great user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full glass hover:bg-white/10 text-white font-medium text-sm transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 mt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:you@email.com"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}

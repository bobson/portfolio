import { prisma } from "@/lib/prisma";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Slobodan Markoski",
  description:
    "A collection of my work — full-stack apps, experiments, and open source contributions.",
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
  });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="min-h-screen relative px-6 py-20 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            My Work
          </p>
          <h1 className="font-space text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Things I&apos;ve built — from side experiments to production apps.
          </p>
        </div>

        {projects.length === 0 && (
          <div className="glass rounded-2xl p-16 text-center text-neutral-500">
            No projects yet. Check back soon.
          </div>
        )}

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="font-space text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">
              Featured
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* All other projects */}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <h2 className="font-space text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">
                More Projects
              </h2>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
};

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className="glass rounded-2xl overflow-hidden flex flex-col group hover:border-violet-500/40 transition-colors duration-300">
      {/* Image */}
      {project.imageUrl && (
        <div className="h-48 overflow-hidden bg-neutral-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-space font-semibold leading-snug ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          {project.featured && (
            <span className="shrink-0 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-violet-600/20 text-violet-400 border border-violet-500/30">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-4 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub size={15} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors duration-200"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="flex h-full flex-col border border-zinc-200 bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:hover:bg-zinc-950">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h2>
        <p className="text-sm leading-7 text-zinc-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden dark:text-zinc-400 sm:text-base">
          {project.description}
        </p>
      </div>

      <div className="mt-8 space-y-5">
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <li
              key={`${project.slug}-${technology}`}
              className="rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-300">
          {project.links.repository ? (
            <a
              href={project.links.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              GitHub
            </a>
          ) : null}

          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;


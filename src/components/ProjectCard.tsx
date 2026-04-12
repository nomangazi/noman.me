import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="border border-zinc-200 p-6 transition-transform duration-200 ease-out hover:scale-[1.02] hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h2>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={`${project.slug}-${technology}`}
              className="rounded-full border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;


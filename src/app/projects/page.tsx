import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const projects = projectsData as Project[];

const ProjectsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-20 sm:px-8 lg:py-24">
      <section className="w-full space-y-10">
        <div className="max-w-2xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Selected backend and fullstack work.
        </h1>
        <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
          A concise set of production-focused projects with clear technical scope.
        </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;


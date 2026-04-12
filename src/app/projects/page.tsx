import ProjectCard from "@/components/ProjectCard";
import ProjectCardFadeIn from "@/components/project-card-fade-in";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

const projects = projectsData as Project[];

const ProjectsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-20 sm:px-8">
      <section className="w-full space-y-14">
        <div className="max-w-3xl space-y-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Projects
          </p>
          <h1 className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
            Selected Projects
          </h1>
          <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Production-focused backend and fullstack work with an emphasis on API reliability,
            data integrity, and maintainable system design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCardFadeIn key={project.slug} index={index}>
              <ProjectCard project={project} />
            </ProjectCardFadeIn>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;


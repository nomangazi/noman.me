const ProjectsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-20 sm:px-8">
      <section className="max-w-2xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Selected work will live here.
        </h1>
        <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
          The projects section is intentionally simple and ready to be connected to
          structured project data.
        </p>
      </section>
    </main>
  );
};

export default ProjectsPage;


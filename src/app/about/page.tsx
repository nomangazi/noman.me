import { aboutContent } from "@/data/about";

const AboutPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-20 sm:px-8 lg:py-24">
      <div className="w-full space-y-14">
        <section className="max-w-3xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {aboutContent.label}
          </p>
          <h1 className="text-4xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            {aboutContent.title}
          </h1>
        </section>

        <section className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="space-y-5">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {aboutContent.bio.heading}
            </h2>
            {aboutContent.bio.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                {paragraph}
              </p>
            ))}
          </article>

          <aside className="border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {aboutContent.personal.heading}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              {aboutContent.personal.body}
            </p>
          </aside>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Career path
          </h2>
          <ol className="border-l border-zinc-200 pl-6 dark:border-zinc-800">
            {aboutContent.timeline.map((item) => (
              <li key={`${item.period}-${item.company}`} className="relative pb-10 last:pb-0">
                <span className="absolute -left-8 top-2 h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-50" />
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {item.period}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.company}</p>
                <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.details}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;


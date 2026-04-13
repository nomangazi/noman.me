import { aboutContent } from "@/data/about";

const AboutPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-20 sm:px-8 lg:py-24">
      <div className="w-full space-y-24 lg:space-y-28">
        <section className="max-w-4xl space-y-8 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {aboutContent.label}
          </p>
          <h1 className="text-5xl font-black tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
            {aboutContent.title}
          </h1>
          <p className="text-lg font-medium leading-9 text-zinc-700 dark:text-zinc-300">
            {aboutContent.bio.paragraphs[0]}
          </p>
        </section>

        <section className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="space-y-7 border-t border-zinc-200 pt-10 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
              {aboutContent.bio.heading}
            </h2>
            {aboutContent.bio.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                {paragraph}
              </p>
            ))}
          </article>

          <aside className="border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
              {aboutContent.personal.heading}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              {aboutContent.personal.body}
            </p>
          </aside>
        </section>

        <section className="space-y-8 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
            Experience Timeline
          </h2>
          <ol className="border-l border-zinc-200 pl-8 dark:border-zinc-800">
            {aboutContent.timeline.map((item) => (
              <li key={`${item.period}-${item.company}`} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.05rem] top-2 h-2.5 w-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />
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

        <section className="border-t border-zinc-200 py-20 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              Looking for the full story?
            </h2>
            <a
              href="/Noman_Gazi_Software_Engineer.pdf"
              className="inline-flex min-h-14 items-center justify-center border border-zinc-950 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
            >
              Download Full Resume (PDF)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;


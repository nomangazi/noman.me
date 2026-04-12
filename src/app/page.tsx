import ContactForm from "@/components/ContactForm";
import HeroFadeIn from "@/components/hero-fade-in";
import { contactContent } from "@/data/contact";
import { expertiseContent } from "@/data/expertise";
import { profileHero } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
      <div className="w-full space-y-24 lg:space-y-28">
        <HeroFadeIn className="w-full py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center border border-zinc-200 px-3 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                {profileHero.availabilityBadge}
              </p>
              <h1 className="text-6xl font-black tracking-tighter text-zinc-950 sm:text-7xl dark:text-zinc-50">
                {profileHero.name}
              </h1>
              <p className="text-xl font-medium text-zinc-600 sm:text-2xl dark:text-zinc-400">
                {profileHero.subtitle}
              </p>
              <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                {profileHero.intro}
              </p>

              <div
                className="pt-10 inline-flex flex-col items-start gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
                aria-hidden="true"
              >
                <span>Scroll Down</span>
                <span className="h-3 w-3 animate-bounce border-r border-b border-zinc-500 rotate-45 dark:border-zinc-400" />
              </div>
            </div>

            <div className="w-full max-w-md justify-self-start lg:justify-self-end" aria-hidden="true">
              <div className="aspect-4/5 w-full rounded-2xl border border-zinc-200 bg-zinc-100 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex h-full items-end rounded-xl border border-zinc-300 bg-zinc-200/70 p-4 text-xs uppercase tracking-[0.18em] text-zinc-500 grayscale dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                  Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </HeroFadeIn>

        <section id="expertise" className="border border-zinc-200 py-24 sm:px-12 dark:border-zinc-800">
          <div className="space-y-10 px-8 sm:px-0">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {expertiseContent.label}
              </p>
              <h2 className="text-3xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                {expertiseContent.title}
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {expertiseContent.categories.map((category) => (
                <article key={category.name} className="space-y-6">
                  <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {category.name}
                  </h3>
                  <ul className="grid gap-4">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="border border-zinc-200 px-4 py-3 text-base text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-950"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 border border-zinc-200 px-8 py-16 sm:px-12 sm:py-20 dark:border-zinc-800">
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 sm:text-4xl dark:text-zinc-50">
            {contactContent.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            {contactContent.description}
          </p>
          <a
            href={`mailto:${contactContent.email}`}
            className="mt-8 inline-flex h-12 items-center justify-center border border-zinc-950 bg-zinc-950 px-6 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
          >
            Send an Email
          </a>
          <ContactForm
            email={contactContent.email}
            copyLabel={contactContent.copyLabel}
            copiedLabel={contactContent.copiedLabel}
          />
        </section>
      </div>
    </main>
  );
}

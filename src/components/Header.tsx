import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
] as const;

const Header = () => {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="inline-flex items-baseline gap-2 text-sm font-medium tracking-tight text-zinc-950 transition-colors hover:opacity-80 dark:text-zinc-50"
        >
          <span>Noman Gazi</span>
          <span className="text-zinc-500 dark:text-zinc-400">Backend Engineer</span>
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;


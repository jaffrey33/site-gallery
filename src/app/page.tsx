import Image from "next/image";
import Link from "next/link";
import { showcaseSites } from "@/data/sites";
import { CountUp, Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { CopyEmailButton } from "@/components/copy-email-button";
import { experience} from "@/data/experience";

// Edit these to keep the landing page current.
const YEARS_EXPERIENCE = 3;
const OPEN_TO_WORK = true;

const services = [
  {
    title: "Business websites",
    description:
      "Fast, mobile-friendly sites for trades and local businesses that turn visitors into enquiries.",
  },
  {
    title: "Web applications",
    description:
      "Full stack apps with bookings, payments, dashboards and user accounts, from the database to the UI.",
  },
  {
    title: "Automation & data tools",
    description:
      "Scrapers and scripts that collect, clean and structure data so you don't have to do it by hand.",
  },
];

const liveCount = showcaseSites.filter((s) => s.tags?.includes("Deploy")).length;

const stats = [
  { value: `${YEARS_EXPERIENCE}+`, label: "Years building for the web" },
  { value: `${showcaseSites.length}`, label: "Projects shipped" },
  { value: `${liveCount}`, label: "Live client sites" },
];

const selectedWork = [
  ...showcaseSites.filter((s) => s.featured && s.imgSrc),
  ...showcaseSites.filter((s) => !s.featured && s.imgSrc),
].slice(0, 3);

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`inline-block h-4 w-4 transition-transform group-hover:translate-x-1 ${className}`} aria-hidden>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">{children}</p>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative isolate flex min-h-svh flex-col">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.22),transparent_70%)] blur-2xl"
        />
        <header>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="mx-auto flex items-center justify-between gap-2">
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Jaffrey Musin
              </p>
              <div className="flex items-center gap-4">
                <ul className="flex gap-4 text-xs tracking-widest text-neutral-500">
                  <li><a href="https://github.com/jaffrey33" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/jaffrey-musin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><CopyEmailButton /></li>
                </ul>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center px-4">
          <div className="space-y-4">
            {OPEN_TO_WORK ? (
              <p style={{ animation: "fadeUp 1s 0.1s ease forwards" }} className="flex justify-center opacity-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-800">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Open to new projects
                </span>
              </p>
            ) : null}
            <h1 style={{ animation: "fadeUp 1s 0.3s ease forwards" }} className="text-center text-5xl opacity-0 sm:text-7xl">
              Jaffrey Musin<span className="text-slate-500">.</span>
            </h1>
            <p style={{ animation: "fadeUp 1s 0.5s ease forwards" }} className="mx-auto max-w-md text-center text-sm leading-tight tracking-widest text-neutral-400 opacity-0">
              Full-stack developer with {YEARS_EXPERIENCE} years of experience building web applications with React, TypeScript and Node.js
            </p>
            <div style={{ animation: "fadeUp 1s 0.7s ease forwards" }} className="mt-6 flex justify-center gap-6 text-sm font-medium opacity-0">
              <Link href="/gallery" className="group text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
                View my work <ArrowRight className="ml-0.5" />
              </Link>
            </div>
          </div>
        </main>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200/80 dark:border-zinc-800">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-zinc-200/80 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8 dark:divide-zinc-800">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="py-8 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-semibold tabular-nums tracking-tight text-zinc-900 dark:text-zinc-50">
                <CountUp value={s.value} />
              </dd>
              <dd className="mt-1 text-xs uppercase tracking-widest text-zinc-500">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="space-y-2">
          <SectionLabel>What I do</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            From first sketch to live site.
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-zinc-200/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-600">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              A few recent builds.
            </h2>
          </div>
          <Link href="/gallery" className="group shrink-0 text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
            See all {showcaseSites.length} <ArrowRight className="ml-0.5" />
          </Link>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {selectedWork.map((site, i) => (
            <Reveal key={site.id} delay={i * 120}>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
                <Image
                  src={site.imgSrc!}
                  alt={`Screenshot of ${site.title}`}
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">{site.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{site.description}</p>
            </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto w-full max-w-6xl space-y-10 px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="space-y-2">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Where I&apos;ve been building.
          </h2>
          <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
            Computer Engineering graduate building features end to end, currently working remotely with a New Zealand team.
          </p>
        </Reveal>

        <ol className="relative space-y-10 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[var(--background)] sm:-left-[37px] ${job.current ? "bg-black dark:bg-white" : "bg-zinc-400 dark:bg-zinc-600"}`}
              />
              <Reveal delay={i * 120}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {job.role} <span className="font-normal text-zinc-500">· {job.company}</span>
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">{job.period}</p>
                </div>
                <p className="mt-1 text-xs text-zinc-500">{job.location}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <span key={t} className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-zinc-200/80 bg-zinc-50 px-6 py-14 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Whether it&apos;s a new website, a web app or a tool to save you time, I&apos;d love to hear about it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CopyEmailButton className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
              Email me
            </CopyEmailButton>
            <a href="https://www.linkedin.com/in/jaffrey-musin/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto max-w-4xl py-10 text-center">
        <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Jaffrey Musin</p>
      </footer>
    </div>
  );
}

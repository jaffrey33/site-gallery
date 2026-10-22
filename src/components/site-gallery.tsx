"use client";

import { useMemo, useState } from "react";
import type { ShowcaseSite } from "@/data/sites";
import Image from "next/image";

function SiteCard({ site }: { site: ShowcaseSite }) {
  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer">
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-zinc-600">
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {site.title}
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon group-hover:block hidden lucide-arrow-up-right">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </div>

          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {site.description}
          </p>
          {site.tags?.length ? (
            <div className="flex flex-wrap gap-1.5">
              {site.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="h-15" />
        <Image
          src={site.imgSrc || "/github.webp"}
          alt={`Screenshot of ${site.title}`}
          width={600}
          height={400}
          className="w-64 h-40 border group-hover:scale-105 group-hover:-rotate-2 transition-transform 
          absolute -right-16 -bottom-22 rounded-md -rotate-5"
        />
      </article>
    </a>
  );
}

export function SiteGallery({ sites }: { sites: ShowcaseSite[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const s of sites) s.tags?.forEach((t) => set.add(t));
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [sites]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return sites
      .filter((s) => {
        // Show all tags when none is selected
        const matchesTag =
          !activeTag || (s.tags?.includes(activeTag) ?? false);

        // Show all data when search is empty
        const matchesSearch =
          !q ||
          `${s.title} ${s.description} ${s.tags?.join(" ") ?? ""}`
            .toLowerCase()
            .includes(q);

        return matchesTag && matchesSearch;
      })
      .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [sites, query, activeTag]);
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <section className="space-y-6">
        <div className="flex flex-wrap gap-4 justify-between max-md:flex-col-reverse">
          <label className="relative w-full sm:max-w-sm">
            <span className="sr-only">Search sites</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, tag, or description…"
              className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400/40 placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
            />
          </label>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              My sites
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {filtered.length} of {sites.length} shown
            </p>
          </div>

        </div>

        {allTags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${activeTag === null
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
            >
              All tags
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag((t) => (t === tag ? null : tag))}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${activeTag === tag
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 px-6 py-12 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400">
            No sites match your filters. Clear search or pick another tag.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

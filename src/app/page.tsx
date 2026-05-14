import { SiteGallery } from "@/components/site-gallery";
import { showcaseSites } from "@/data/sites";

export default function Home() {
  return (
    <div className="relative min-h-full flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.28),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.18),transparent)]"
        aria-hidden
      />
      <header className="border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Portfolio gallery
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              Every site I ship, in one calm place.
            </h1>
      
          </div>
        </div>
      </header>
      <SiteGallery sites={showcaseSites} />
    </div>
  );
}

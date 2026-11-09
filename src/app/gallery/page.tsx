import { SiteGallery } from "@/components/site-gallery"
import { ThemeToggle } from "@/components/theme-toggle"
import { CopyEmailButton } from "@/components/copy-email-button"
import { showcaseSites } from "@/data/sites"
import Link from "next/link"

function Gallery() {
  return (
    <div className="relative min-h-full flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.28),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.18),transparent)]"
        aria-hidden
      />
      <header className="border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/70">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <Link href='/' className="flex gap-2 items-center text-zinc-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-left-icon lucide-move-left">
                <path d="M6 8L2 12L6 16" /><path d="M2 12H22" />
              </svg>
              <p className="text-sm font-medium uppercase tracking-widest">
                Portfolio gallery
              </p>
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              Every site I ship, in one calm place.
            </h1>
            <ul className="text-xs text-neutral-500 tracking-widest flex gap-4">
              <li><a href="https://github.com/jaffrey33" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/jaffrey-musin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><CopyEmailButton /></li>
            </ul>

          </div>

        </div>
      </header>
      <SiteGallery sites={showcaseSites} />
    </div>
  )
}

export default Gallery
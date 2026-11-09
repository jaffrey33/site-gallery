import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden ">
      <div aria-hidden />
      <header>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className=" flex gap-2 justify-between items-center mx-auto">
            <p  className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Jaffrey Musin
            </p>

            <div>
              <ul className="text-xs text-neutral-500 tracking-widest flex gap-4">
                <li><a href="https://github.com/jaffrey33" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/jaffrey-musin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:jaffreymusin33@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="space-y-4">
          <h1 style={{ animation: 'fadeUp 1s 0.3s ease forwards',}} className="text-7xl text-center opacity-0">
            Jaffrey Musin<span className="text-slate-500">.</span>
          </h1>
          <p style={{ animation: 'fadeUp 1s 0.5s ease forwards',}} className="text-neutral-400 tracking-widest max-w-md text-center text-sm opacity-0 leading-tight">
            Full Stack Developer with 3 years of experience building web applications
          </p>
          <Link style={{ animation: 'fadeUp 1s 0.7s ease forwards',}} href="/gallery" className="block mt-6 text-center text-sm font-medium text-neutral-500 hover:text-neutral-700 opacity-0 leading-relaxed">
            View my work
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right inline-block w-4 h-4 ml-.5 "><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>

      </main>

      <footer className="max-w-4xl mx-auto text-center  py-10">
        <p className="text-sm text-neutral-400 mb-4">My Tech Stack</p>
        <div>
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Php"].map((tech) => (
            <span
              key={tech}
              className="inline-block  text-neutral-400 px-3 py-1 rounded-full text-xs mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

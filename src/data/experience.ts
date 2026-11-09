// Source: CV (Moh. Jaffrey Musin). Keep in sync when the CV changes.

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Kiwiculture Ltd",
    role: "Full-Stack Developer",
    location: "New Zealand · Remote",
    period: "Jan 2024 — Present",
    current: true,
    highlights: [
      "Design and develop web applications with React, Next.js, TypeScript and Node.js, turning requirements into working features.",
      "Built a booking system for Kiwi Avoidance Training with scheduling, an availability calendar, user accounts, an admin panel and Stripe Checkout payments.",
      "Manage async data, caching, loading states and real-time updates with TanStack Query.",
      "Test, debug and optimise performance while keeping the codebase clean and scalable with Git and GitHub.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "TanStack Query", "Stripe"],
  },
  {
    company: "Vintazk Outsourcing",
    role: "Frontend Developer",
    location: "Philippines",
    period: "Jul 2023 — Oct 2023",
    highlights: [
      "Built responsive web interfaces with HTML, CSS and JavaScript, and customised WordPress themes.",
      "Tested sites and fixed UI, functionality and cross-device compatibility issues.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Government Agency CRM Dashboard",
    description:
      "Full-stack CRM dashboard with case tracking for a government agency, using Prisma over a PostgreSQL database hosted on Supabase.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Supabase"],
  },
  {
    title: "Real Estate Portal",
    description:
      "Full-stack property platform with filtering, pagination, geolocation, back-end API integration and Google Maps.",
    tech: ["React", "Node.js", "Express", "MySQL"],
  },
];

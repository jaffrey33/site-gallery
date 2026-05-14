export type ShowcaseSite = {
  id: string;
  title: string;
  description: string;
  /** Full URL including protocol, e.g. https://example.com */
  url: string;
  tags?: string[];
  featured?: boolean;
};

/**
 * Edit this list to showcase your sites. Add as many entries as you need.
 * Optional `featured: true` surfaces a site in the hero strip.
 */
export const showcaseSites: ShowcaseSite[] = [
  {
    id: "sample-1",
    title: "KCC",
    description:
      "Transforming ideas into powerful digital experiences with cutting-edge web development and design.",
    url: "https://kcc-nextjs.vercel.app/",
    tags: ["Deploy","Demo", "Next.js"],
    featured: true,
  },
  {
    id: "sample-2",
    title: "Automotive",
    description: "Experience unparalleled automotive repair services tailored for your vehicle's unique needs.",
    url: "https://automotive-next-js-tau.vercel.app/",
    tags: ["Deploy", "Next.js"],

  },
  {
    id: "sample-3",
    title: "Kaitiaki Security",
    description: "Locally owned and operated, we focus on employing and upskilling tangata whenua and community members.",
    url: "https://kaitiaki-security.vercel.app/",
    tags: ["Demo", "Next.js"],
  }
];

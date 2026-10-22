export type ShowcaseSite = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags?: string[];
  featured?: boolean;
  imgSrc?: string;
};

export const showcaseSites: ShowcaseSite[] = [
    {
    id: "sample-11",
    title: "Property Scraper",
    description: "We believe in fair pricing for exceptional results. See the difference our professional water blasting makes.",
    url: "https://github.com/jaffrey33/scraper",
    tags: ["Deploy", "React"],
    imgSrc: ""
  },
  {
    id: "sample-1",
    title: "Freeman Water Blasting",
    description: "We believe in fair pricing for exceptional results. See the difference our professional water blasting makes.",
    url: "https://freemanwaterblasting.co.nz/",
    tags: ["Deploy", "React"],
    imgSrc: "/freeman.png"
  },
  {
    id: "sample-2",
    title: "Kuro Raostery",
    description: "Carefully sourced and masterfully roasted to perfection. Experience the art of Japanese coffee craftsmanship.",
    url: "https://kuro-roastery.vercel.app/",
    tags: ["Demo", "Next.js"],
    imgSrc: "/kuro.png"
  },
  {
    id: "sample-3",
    title: "YLPM",
    description: "A comprehensive real estate platform with property listings, agent profiles, and virtual tours.",
    url: "https://www.ylpm.co.nz/",
    tags: ["Deploy", "React"],
    imgSrc: "/ylpm.png"
  },
  {
    id: "sample-5",
    title: "Automotive",
    description: "Experience unparalleled automotive repair services tailored for your vehicle's unique needs.",
    url: "https://automotive-next-js-tau.vercel.app/",
    tags: ["Deploy", "Next.js"],
    imgSrc: "/automotive.png",
  },
  {
    id: "sample-6",
    title: "Kaitiaki Security",
    description: "Locally owned and operated, we focus on employing and upskilling tangata whenua and community members.",
    url: "https://kaitiaki-security.vercel.app/",
    tags: ["Demo", "Next.js"],
    imgSrc: "/kaitiaki.png",
  },
  {
    id: "sample-7",
    title: "Bfhomes",
    description: "Affordable, quality, warm and healthy homes, an ideal first home, extension or rental.",
    url: "https://bfhomes.vercel.app/",
    tags: ["Demo", "Next.js"],
    imgSrc: "/bfhomes.png",
  },
  {
    id: "sample-8",
    title: "Handyman",
    description: "From small repairs to major renovations, we provide reliable, high-quality handyman services for your home and business.",
    url: "https://handyman.kiwicaretakers.co.nz/",
    tags: ["Demo", "React"],
    imgSrc: "/handyman.png",
  },
  {
    id: "sample-9",
    title: "Electrical",
    description: "From quick repairs to complete wiring, our certified electricians deliver safe, efficient, and reliable electrical services.",
    url: "https://electrical.kiwicaretakers.co.nz/",
    tags: ["Demo", "React"],
    imgSrc: "/electrical.png"
  },
  {
    id: "sample-10",
    title: "Pest Control",
    description: "Protect your home or business with our expert pest control solutions.",
    url: "https://pest.kiwicaretakers.co.nz/",
    tags: ["Demo", "React"],
    imgSrc: "/pest.png"
  },

];

export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024—2026",
    title: "Research Assistant",
    company: "AgileCPS Labs, Cardiff University",
    description:
      "",
    companyUrl: "https://www.agilecps.org/",
  },
];

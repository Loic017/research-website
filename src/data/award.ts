export type AwardIcon = "trophy" | "award" | "banknote" | "graduation-cap";

export interface Award {
    year: string;
    title: string;
    institution: string;
    tldr?: string;
    imageUrl?: string;
    icon?: AwardIcon;
}

export const awardData: Award[] = [
    {
        year: "2026",
        institution: "ASSET @ Mobisys 2026",
        title: "ASSET'26 Scholarship",
        icon: "award",
        tldr: "Accepted into ASSET'26 @ ACM Mobisys 2026 + Included Scholarship.",
    },
    {
        year: "2025",
        institution: "Cardiff University",
        title: "PhD Studentship",
        icon: "banknote",
        tldr: "Fully funded PhD studentship in the School of Computer Science and Informatics.",
    },
    {
        year: "2024",
        institution: "Thales Group and Cardiff University",
        title: "Thales Group MPhil Scholarship",
        icon: "banknote",
        tldr: "Funded MPhil scholarship in the School of Computer Science and Informatics.",
    },
    {
        year: "2024",
        institution: "Global Wales, Cardiff University, and Vietnam National University - Ho Chi Minh University of Technology",
        title: "First Prize, Student Poster Competition on “AI, Smart Healthcare, and IoT”",
        icon: "trophy",
        tldr: "Awarded for a poster on my dissertation study.",
    },
    {
        year: "2024",
        institution: "Cardiff University",
        title: "Best Dissertation, School of Computer Science and Informatics",
        icon: "trophy",
        tldr: "Awarded for my dissertation: 'Design a tiny machine learning model to detect epileptic seizures on wearables'",
    }
];

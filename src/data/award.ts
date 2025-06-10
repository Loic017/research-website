export interface Award {
    year: string;
    title: string;
    institution: string;
    tldr?: string;
    imageUrl?: string;
}

export const awardData: Award[] = [
    // If you don't want to show publications, just make the array empty.
    {
        year: "2025",
        institution: "Cardiff University",
        title: "PhD Studentship",
        // tldr: "",
    },
    {
        year: "2024",
        institution: "Cardiff University",
        title: "Best Final Year Project, School of Computer Science and Informatics",
        tldr: "Awarded for my dissertation: 'Design a tiny machine learning model to detect epileptic seizures on wearables'",
    },
    {
        year: "2024",
        institution: "Global Wales, Cardiff University, and Vietnam National University - Ho Chi Minh University of Technology",
        title: "First Prize, Student Poster Competition on “AI, Smart Healthcare, and IoT”",
        tldr: "Awarded for a poster on my dissertation study.",
    },
    {
        year: "2024",
        institution: "Thales Group and Cardiff University",
        title: "Thales Group MPhil Scholarship",
        // tldr: "",
    }
];

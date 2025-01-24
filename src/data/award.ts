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
        year: "2024",
        institution: "Cardiff University",
        title: "Best Final Year Project, BSc Computer Science and Variants",
        // tldr: "Awarded for my dissertation: 'design a tiny machine learning model to detect epileptic seizures on wearables'",
    },
    {
        year: "2024",
        institution: "Global Wales, Cardiff University, and Vietnam National University - Ho Chi Minh University of Technology",
        title: "First Prize, Student Poster Competition on “AI, Smart Healthcare, and IoT”",
        // tldr: "",
    }
];

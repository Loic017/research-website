export type NewsIcon = "trophy" | "award" | "banknote" | "graduation-cap" | "star" | "file-text";

export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
  icon?: NewsIcon;
  theme?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "May 2026",
    title: "ASSET'26 and Mobisys Scholarship 🎓",
    description: "I have been accepted into the ASSET'26 Symposium @ ACM Mobisys 2026. Through this, I have achieved a scholarship to attend the conference in Cambridge.",
    link: "https://www.sigmobile.org/mobisys/2026/asset/",
    icon: "award",
    theme: "Award",
  },
  {
    date: "April 2026",
    title: "Workshop Paper @ Mobisys'26 📄",
    description: "My paper 'PERSE: A PERsonalised SEizure prediction system based on large-scale EEG foundation model' has been accepted to a Mobisys workshop (EIFCOM)!",
    icon: "file-text",
    theme: "Publication",
  },
  {
    date: "April 2026",
    title: "PhD Commencement 🏁",
    description: "I have started my PhD!",
    icon: "graduation-cap",
    theme: "Academic",
  },
  {
    date: "January 2026",
    title: "MPhil Viva Completed: No Corrections 🎉",
    description: "I have successfully completed my MPhil.",
    icon: "trophy",
    theme: "Academic",
  },
  {
    date: "June 2025",
    title: "Extended Abstract Accepted - MobiUK 2025 Symposium 📄",
    description: "I will be presenting the extended abstract 'Edge-Based Anomaly Detection in Electric Vehicle Charging Infrastructure with Continual Learning' at the MobiUK 2025 Symposium in Edinburgh.",
    icon: "file-text",
    theme: "Publication",
  },
  {
    date: "March 2025",
    title: "PhD Studentship 🎉",
    description: "I will be joining Dr Nick Pham as a PhD student in the AgileCPS Lab at Cardiff University in 2026 with a full studentship.",
    icon: "banknote",
    theme: "Award",
  }
];

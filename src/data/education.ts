export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Incoming 2026",
    institution: "Cardiff University",
    degree: "PhD in Computer Science",
    advisor: "Dr. Nick Pham...",
    thesis: "..."
  },
  {
    year: "2024—Present",
    institution: "Cardiff University",
    degree: "M.Phil. in Computer Science",
    advisor: "Dr. Amir Javed, Dr. Nick Pham",
    thesis: "A Vehicle CAN (Controller Area Network) On-Board Security Operations Center (SOC)"
  },
  {
    year: "2021—2024",
    institution: "Cardiff University",
    degree: "B.S. in Computer Science",
    thesis: "Design a tiny machine learning model to detect epileptic seizures on wearables",
    // Optional links to thesis
    thesisUrl: "https://drive.google.com/file/d/1W1lrBvBA_GrSyujQJyJSLgKLstS-cuaG/view?usp=sharing"
  },
];

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
    year: "2026-Present",
    institution: "Cardiff University",
    degree: "PhD Computer Science",
    advisor: "Dr. Nick Pham <small>(School of Computer Science)</small>, Prof. Jonathan Bisson <small>(School of Medicine)</small>, Dr. Jonas Beuchert <small>(School of Computer Science)</small>, Mr Cuong Nguyen <small>(Google Health London)</small>",
    thesis: " Continuous stress monitoring with biosensing wearable"
  },
  {
    year: "2024—2026",
    institution: "Cardiff University",
    degree: "MPhil Computer Science",
    advisor: "Dr. Amir Javed <small>(School of Computer Science)</small>, Dr. Nick Pham <small>(School of Computer Science)</small>",
    thesis: "Machine Learning Intrusion Detection Sytems for Vehicular Networks"
  },
  {
    year: "2021—2024",
    institution: "Cardiff University",
    degree: "BSc Computer Science",
    thesis: "TinyML for wearable seizure detection",
    // Optional links to thesis
    thesisUrl: "https://drive.google.com/file/d/1W1lrBvBA_GrSyujQJyJSLgKLstS-cuaG/view?usp=sharing"
  },
];

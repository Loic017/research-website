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
    degree: "PhD Computer Science",
    advisor: "Dr. Nick Pham, Prof. Jonathan Bisson , Dr. Jonas Beuchert",
    thesis: " Continuous stress monitoring with biosensing wearable"
  },
  {
    year: "2024—Present",
    institution: "Cardiff University",
    degree: "MPhil Computer Science",
    advisor: "Dr. Amir Javed, Dr. Nick Pham",
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

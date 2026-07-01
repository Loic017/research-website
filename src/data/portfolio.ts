import { StaticImageData } from 'next/image';
import seizure_prediction from './seizure_prediction.png';
// import car from './car.webp';
// import melspectrograms from './melspectrograms.webp';

export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string | StaticImageData;
  projectUrl?: string;
  codeUrl?: string;
  showMeta?: boolean;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Stress w/ Wearables",
    description:
      "(PhD Project) Exploring continuous stress quantification and monitoring on wearable devices.",
    technologies: ["Biosignals", "Wearables"],
    projectUrl: "http://lorentel.com",
    showMeta: true,
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Personalisable Seizure Prediction",
    description:
      'Initial work published to the <a href="/?section=publication">EIFCOM Workshop</a> @ ACM MobiCom 2025.',
    technologies: ["Biosignals", "Wearables", "Foundation Models"],
    projectUrl: "http://lorentel.com",
    imageUrl: seizure_prediction,
    showMeta: true,
    // imageUrl: car,
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Adaptive edge machine learning for vehicular intrusion detection",
    description:
      "(MPhil Project) Exploring on-device adaptive anomaly detection for intrusion detection systems in vehicles.",
    technologies: ["Intrusion Detection Systems"],
    projectUrl: "http://lorentel.com",
    imageUrl: "https://lh3.googleusercontent.com/sitesv/AA5AbUCTGc1M4Unt_c355L53m-bZ2E9P0RYWTjdblMdC2rzDisPizoIBfoMmVLjKvrH2J8oI6fhUE2_fyRxvWLiFRJgTQf3cYrcYeioBeE4R3OeqO345t6UGrE8o_i1W7MjTAdbR8Eo80DHKkL48th8cn14PgwlTImgenp8SAHaYZUVdV5OzIs2FhzM0A0dxkl_fOleRb_IUhdGMdD9zwDFG2PYA8W4yDgj1W3wTzAJMSsg=w1280",
    showMeta: true,
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Seizure Detection with Tiny Machine Learning",
    description:
      "(Undergraduate Thesis) Investigating seizure detection with small-scale machine learning for wearable monitoring.",
    technologies: ["Biosignals", "Wearables"],
    projectUrl: "http://lorentel.com",
    showMeta: true,
    // imageUrl: melspectrograms,
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
];

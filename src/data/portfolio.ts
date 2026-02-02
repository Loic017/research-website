import { StaticImageData } from 'next/image';
// import car from './car.webp';
// import melspectrograms from './melspectrograms.webp';

export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string | StaticImageData;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Adaptive edge machine learning for vehicular intrusion detection",
    description:
      "Explores on-device adaptive anomaly detection for intrusion detection systems in vehicles.",
    technologies: ["TinyML", "Intrusion Detection Systems"],
    projectUrl: "http://lorentel.com",
    // imageUrl: car,
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Stress Quantification and Monitoring on Wearables",
    description:
      "Explores the quantification and monitoring of stress.",
    technologies: ["TinyML", "Biosignals", "Wearables"],
    projectUrl: "http://lorentel.com",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Seizure Detection with Tiny Machine Learning",
    description:
      "Investigated seizure detection with small-scale machine learning for wearable monitoring.",
    technologies: ["TinyML", "Biosignals", "Wearables"],
    projectUrl: "http://lorentel.com",
    // imageUrl: melspectrograms,
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
];

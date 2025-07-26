export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Adaptive edge machine learning for vehicular intrusion detection",
    description:
      "This research explores how anomaly detection for vehicular data can adapt on the edge.",
    technologies: ["TinyML", "Intrusion Detection Systems"],
    // projectUrl: "http://fountain.lorentel.com/projects/Epileptic-Seizure-Detection-with-Tiny-Machine-Learning",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Stress Quantification and Monitoring on Wearables",
    description:
      "We explore the quantification and monitoring of stress.",
    technologies: ["TinyML", "Biosignals", "Wearables"],
    // projectUrl: "https://dl.acm.org/doi/10.1145/3636534.3698121",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
  {
    title: "Seizure Detection with Tiny Machine Learning",
    description:
      "We explore seizure detection with small-scale machine learning for wearable monitoring. Our initial study involves the use of tiny CNN models to detect three common types of epileptic seizures using melspectrogram EEG data.",
    technologies: ["TinyML", "Biosignals", "Wearables"],
    // projectUrl: "http://fountain.lorentel.com/projects/Epileptic-Seizure-Detection-with-Tiny-Machine-Learning",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
];

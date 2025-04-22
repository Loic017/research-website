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
    title: "Epileptic Seizure Detection with Tiny Machine Learning",
    description:
      "A study on the use of tiny CNN models to detect three common types of epileptic seizures using melspectrogram EEG data. Quantized and deployed models remain reliable, with tonic-clonic, non-specific, and absence seizures presenting accuracies of 85%, 81%, and 99% respectively. Developed as a part of my undergraduate dissertation.",
    technologies: ["Python", "PyTorch", "Arduino", "TinyML", "EEG"],
    projectUrl: "http://fountain.lorentel.com/projects/Epileptic-Seizure-Detection-with-Tiny-Machine-Learning",
    imageUrl:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
  },
];

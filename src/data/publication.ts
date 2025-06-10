export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  pub_type?: string; // "paper", "poster", "extended abstract", etc.
  full_conf?: string; // Full conference name, if different from the short name
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "MOBIUK",
    full_conf: "UK Mobile, Wearable and Ubiquitous Systems Research Symposium",
    title: "Edge-Based Anomaly Detection in Electric Vehicle Charging Infrastructure with Continual Learning",
    authors: "Loic Lemoine*, Amanjot Kaur*, Nhat Pham, Omer Rana",
    paperUrl: "https://mobiuk.org/2025/",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "A look at continual learning on a Raspberry Pi for anomaly detection in electric vehicle charging infrastructure. Providing a comparison between a cloud-edge and edge-only approach where a model must learn a new attack.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    pub_type: "Extended Abstract",
  },
  {
    year: "2024",
    conference: "EIFCOM",
    full_conf: "International Workshop on Mobile Computing with Efficient and Interactive Foundation Model (In Conjunction with MobiCom)",
    title: "Stress-GPT: Stress detection with an EEG-based foundation model",
    authors: "Catherine Lloyd*, Loic Lorente Lemoine*, Reiyan Al-Shaikh, Kim Tien Ly, Hakan Kayan, Charith Perera, Nhat Pham",
    paperUrl: "https://dl.acm.org/doi/10.1145/3636534.3698121",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We fine-tune a large language model for stress detection and evaluate it on a 40-subject open stress dataset. This is followed by additional experiments comparing traditional machine learning methods, with key observations highlighted to guide future research directions.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    pub_type: "Workshop Paper",
  },
  {
    year: "2024",
    conference: "MOBIUK",
    full_conf: "UK Mobile, Wearable and Ubiquitous Systems Research Symposium",
    title: "Epileptic seizure detection with Tiny Machine Learning - a Preliminary Study",
    authors: "Loic Lemoine, Nhat Pham",
    paperUrl: "https://mobiuk.org/2024/abstract/S4_P2_Lemoine_Seizure.pdf",
    codeUrl: "https://fountain.lorentel.com/projects/Epileptic-Seizure-Detection-with-Tiny-Machine-Learning",
    tldr: "CNN models are trained on melspectrogram EEG data to detect three different types of common epileptic seizures. These models are compressed and deployed onto an Arduino platform.",
    pub_type: "Extended Abstract",
  },
];

export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "June 2025",
    title: "Extended Abstract Accepted - MobiUK 2025",
    description: "My extended abstract (with Amanjot Kaur) 'Edge-Based Anomaly Detection in Electric Vehicle Charging Infrastructure with Continual Learning' has been accepted at MobiUK 2025.",
  },
  {
    date: "March 2025",
    title: "PhD Studentship",
    description: "I will be joining Dr Nick Pham as a PhD student in the AgileCPS Lab at Cardiff University in 2026.",
  }
];

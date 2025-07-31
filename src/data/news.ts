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
    title: "Extended Abstract Accepted - MobiUK 2025 Symposium",
    description: "I will be presenting the extended abstract 'Edge-Based Anomaly Detection in Electric Vehicle Charging Infrastructure with Continual Learning' at the MobiUK 2025 Symposium in Edinburgh.",
  },
  {
    date: "March 2025",
    title: "PhD Studentship 🎉",
    description: "I will be joining Dr Nick Pham as a PhD student in the AgileCPS Lab at Cardiff University in 2026 with a full studentship.",
  }
];

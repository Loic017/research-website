import { StaticImageData } from 'next/image';
import frontpage from './frontpage.png';
import banner from './banner.png';

export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string | StaticImageData;
  bannerImage?: string | StaticImageData;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Loic Lorente Lemoine",
  title: "(MPhil) CompSci @",
  institution: "Cardiff University",
  // Note that links work in the description
  description: `Hello there! I'm Loic, a Computer Science student at Cardiff University, currently completing my MPhil and working as a research assistant with the Agile CPS Lab.
  <br></br>
  I earned my BSc in Computer Science from CU in 2024, graduating with First Class Honours after completing my dissertation on EEG-based seizure detection with TinyML. Currently, my master's projects investigates machine learning for defence against vehicle CAN attacks." 
  As such, my research focuses are on Machine Learning.`,
  email: "reachloic@gmail.com",
  imageUrl: frontpage,
  bannerImage: banner,
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "loic017",
  linkedinUsername: "lemoineloic",
  // twitterUsername: "janesmith",
  blogUrl: "https://fountain.lorentel.com",
  cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};

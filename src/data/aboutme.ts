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
  description: `Hello there! I'm Loic, an MPhil student at Cardiff University in the School of Computer Science and Informatics and a part of the <a href="https://www.agilecps.org/" target="_blank">AgileCPS Lab</a>.
  <br></br>
  I earned my BSc in Computer Science from CU in 2024, graduating with First Class Honours after completing my dissertation on EEG seizure detection with TinyML. Currently, my master's project investigates machine learning defence for vehicle CAN attacks. Following the completion of my MPhil, I will be commencing a PhD under the supervision of Dr. Nick Pham.
  <br></br>
  My research primarily involves exploring machine learning for human sensing and edge AI.
  <br></br>
  <i>Page Contents: Recent Highlights, Education, Experience, Publications, Awards, Repos</i>
  `,
  email: "lorentelemoinel@cardiff.ac.uk",
  imageUrl: frontpage,
  bannerImage: banner,
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "loic017",
  linkedinUsername: "lemoineloic",
  // twitterUsername: "janesmith",
  // blogUrl: "https://fountain.lorentel.com",
  // cvUrl: "https://",
  institutionUrl: "https://www.cardiff.ac.uk/",
  // altName: "",
  // secretDescription: "I like dogs.",
};

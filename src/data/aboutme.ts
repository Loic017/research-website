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
  title: "MPhil Computer Science",
  institution: "Cardiff University",
  // Note that links work in the description
  description:
    "Hello there, I am Loic - a compsci student @ Cardiff University. I am currently completing my MPhil and working as a research assistant with the <a href='https://www.agilecps.org/'>Agile CPS lab</a>. <br><br> My current focuses involve machine learning for embedded devices and cyber-physical systems.",
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

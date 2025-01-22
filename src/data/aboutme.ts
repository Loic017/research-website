import { StaticImageData } from 'next/image';
import frontpage from './frontpage.png';

export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string | String[];
  email: string;
  imageUrl?: string | StaticImageData;
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
    [`Hi, I am Loic - a recent computer science graduate from Cardiff University. I am currently completing my MPhil in Computer Science and working as a research assistant at Cardiff University. I am a part of the <a href="https://www.agilecps.org/">Agile CPS lab</a> at CU. <br><br> My main interest is in machine learning.`
    ],
  email: "reachloic@gmail.com",
  imageUrl: frontpage,
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

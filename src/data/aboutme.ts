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
  pronunciation?: string;
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Loic Lorente Lemoine",
  pronunciation: "/ˈloʊ.ɪk lɔːˈrɛn.teɪ ləˈmwɑːn/",
  title: "PhD CompSci",
  institution: "Cardiff University",
  // Note that links work in the description
  description: `Hello there! 🌊 I'm Loic, a PhD student at Cardiff University 🏴󠁧󠁢󠁷󠁬󠁳󠁿 in the School of Computer Science and Informatics and with the <a href="https://www.agilecps.org/" target="_blank">AGILE Lab</a>.
  <ul style="margin-top:10px;margin-bottom:10px;padding-left:0.5rem">
    <li style="margin:0 0 4px 0">> I finished my <b>BSc in Computer Science from Cardiff University</b> in 2024, graduating with First Class Honours. My dissertation was presented with the best undergraduate dissertation award.</li>
    <li style="margin:0 0 4px 0">> I have completed an <b>MPhil</b> under the supervision of Dr Amir Javed, investigating machine learning intrusion detection for vehicular 🚙 systems.</li>
    <li style="margin:0 0 4px 0;color:rgb(var(--accent))">> I recently started my <b>PhD</b> under the supervision of Dr. Nick Pham.</li>
  </ul>
  My research primarily involves exploring machine learning, amongst other things, for human sensing and edge computing.
  `,
  email: "lorentelemoinel@cardiff.ac.uk",
  imageUrl: frontpage,
  bannerImage: banner,
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "loic-lemon",
  linkedinUsername: "lemoineloic",
  // twitterUsername: "janesmith",
  // blogUrl: "https://fountain.lorentel.com",
  cvUrl: "https://lorentel.com",
  institutionUrl: "https://www.cardiff.ac.uk/",
  // altName: "",
  // secretDescription: "",
};

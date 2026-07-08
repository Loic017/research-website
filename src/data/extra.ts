import { StaticImageData } from "next/image";
import { AwardIcon } from "@/data/award";

export type ExtraImage = string | StaticImageData;

export type ExtraBlock =
  | { type: "bio"; html: string }
  | { type: "image"; src: ExtraImage; alt?: string; caption?: string }
  | { type: "gallery"; images: ExtraImage[]; caption?: string }
  | { type: "award"; year: string; title: string; institution: string; tldr?: string; icon?: AwardIcon };

export const extraBlocks: ExtraBlock[] = [
  {
    type: "bio",
    html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

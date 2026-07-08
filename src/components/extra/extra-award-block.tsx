import { AwardEntry } from "@/components/award-entry";
import { Award } from "@/data/award";

export function ExtraAwardBlock({ year, title, institution, tldr, icon }: Award) {
  return <AwardEntry award={{ year, title, institution, tldr, icon }} />;
}

import {
  Trophy,
  Award,
  Banknote,
  GraduationCap,
  Star,
  FileText,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  award: Award,
  banknote: Banknote,
  "graduation-cap": GraduationCap,
  star: Star,
  "file-text": FileText,
};

export function getIcon(name?: string): LucideIcon | null {
  if (!name) return null;
  return iconMap[name] ?? null;
}

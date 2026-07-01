'use client';
import { useParams } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { Section } from "@/data/section-order";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { ProjectDetail } from "@/components/project-detail";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavBar } from "@/components/nav-bar";
import Link from "next/link";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted text-lg">Project not found.</p>
          <Link
            href="/?section=portfolio"
            className="text-sm text-muted hover:text-foreground underline transition-colors"
          >
            ← Back to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed left-4 top-3 z-[60] hidden md:block opacity-50 hover:opacity-100 transition-opacity duration-300">
        <ThemeToggle />
      </div>
      <NavBar activeSection={Section.Portfolio} />
      <div className="max-w-screen-lg mx-auto px-8 py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <ProfileSection aboutMe={aboutMe} />
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ProjectDetail project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

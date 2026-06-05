'use client';
import Image from "next/image";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
// import { sectionOrder, Section } from "@/data/section-order";
import { Section } from "@/data/section-order";
import { AwardEntry } from "@/components/award-entry";
import { awardData } from "@/data/award";
import { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const quickLinks = [
  { label: "Start", section: null },
  { label: "Research", section: Section.Portfolio },
  { label: "Publications", section: Section.Publication },
  { label: "Timeline", section: Section.Timeline },
  { label: "Awards", section: Section.Award },
];

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") as Section | null;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(
    initialSection && Object.values(Section).includes(initialSection as Section)
      ? initialSection
      : null
  );

  const navigateTo = useCallback((section: Section | null) => {
    setSelectedSection(section);
    setMenuOpen(false);
    const params = new URLSearchParams(window.location.search);
    if (section) {
      params.set("section", section);
    } else {
      params.delete("section");
    }
    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
  }, []);

  // Helper to render the selected section
  const renderSection = () => {
    if (selectedSection === null) {
      // Show about section and recent highlights
      return (
        <>
          {aboutMe.description && (
            <section>
              <div
                className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400"
                dangerouslySetInnerHTML={{ __html: aboutMe.description }}
              />
            </section>
          )}
          {newsData.length > 0 && (
            <section id="recent-highlights">
              <h2 className="font-serif font-bold text-[1.1rem] mb-6 tracking-wide uppercase border-b border-black dark:border-zinc-600">
                Recent Highlights
              </h2>
              <div className="space-y-6">
                {newsData.map((news, index) => (
                  <div key={index}>
                    <NewsEntry news={news} />
                    {index < newsData.length - 1 && (
                      <div className="h-px bg-zinc-200 dark:bg-zinc-700 mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      );
    }

    switch (selectedSection) {
      case Section.News:
        return (
          newsData.length > 0 && (
            <section id="recent-highlights">
              <h2 className="font-serif font-bold text-[1.1rem] mb-12 tracking-wide uppercase border-b border-black dark:border-zinc-600">
                Recent Highlights
              </h2>
              <div className="space-y-12">
                {newsData.map((news, index) => (
                  <div key={index}>
                    <NewsEntry news={news} />
                    {index < newsData.length - 1 && (
                      <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-8" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end items-center gap-2 mt-16">
                {/* <p className="text-sm text-zinc-600 italic cursor-not-allowed line-through">View all highlights here →</p> */}
              </div>
            </section>
          )
        );
      case Section.Timeline:
        return (
          (educationData.length > 0 || experienceData.length > 0) && (
            <section id="timeline">
              {educationData.length > 0 && (
                <>
                  <h2 className="font-serif font-bold text-[1.1rem] mb-12 tracking-wide uppercase border-b border-black dark:border-zinc-600">
                    Education
                  </h2>
                  <div className="space-y-12 mb-16">
                    {educationData.map((education, index) => (
                      <EducationEntry key={index} education={education} />
                    ))}
                  </div>
                </>
              )}
              {experienceData.length > 0 && (
                <>
                  <h2 className="font-serif font-bold text-[1.1rem] mb-12 tracking-wide uppercase border-b border-black dark:border-zinc-600">
                    Experience
                  </h2>
                  <div className="space-y-12">
                    {experienceData.map((experience, index) => (
                      <ExperienceEntry key={index} experience={experience} />
                    ))}
                  </div>
                </>
              )}
            </section>
          )
        );
      case Section.Publication:
        return (
          publicationData.length > 0 && (
            <section id="publications">
              <h2 className="font-serif font-bold text-[1.1rem] tracking-wide uppercase border-b border-black dark:border-zinc-600">
                Publications
              </h2>
              <div className="flex justify-end items-center gap-2 mb-8">
                <p className="text-sm text-zinc-600 italic opacity-35">* means co-first author</p>
              </div>
              <div className="space-y-12">
                {publicationData.map((publication, index) => (
                  <div key={index}>
                    <PublicationEntry publication={publication} />
                    {index < publicationData.length - 1 && (
                      <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-8" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end items-center gap-2 mt-2">
                {/* <p className="text-sm text-zinc-600 italic cursor-not-allowed line-through">View all publications here →</p> */}
              </div>
            </section>
          )
        );
      case Section.Portfolio:
        return (
          portfolioData.length > 0 && (
            <section id="research">
              <h2 className="font-serif font-bold text-[1.1rem] mb-12 tracking-wide uppercase border-b border-black dark:border-zinc-600">
                Research
              </h2>
              <div className="space-y-12">
                {portfolioData.map((portfolio, index) => (
                  <div key={index}>
                    <PortfolioEntry key={index} portfolio={portfolio} />
                    {index < portfolioData.length - 1 && (
                      <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-8" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        );
      case Section.Award:
        return (
          awardData.length > 0 && (
            <section id="awards">
              <h2 className="font-serif font-bold text-[1.1rem] mb-12 tracking-wide uppercase border-b border-black dark:border-zinc-600">
                Awards
              </h2>
              <div className="space-y-12">
                {awardData.map((award, index) => (
                  <div key={index}>
                    <AwardEntry key={index} award={award} />
                    {index < awardData.length - 1 && (
                      <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-8" />
                    )}
                  </div>
                ))}
              </div>
              <Image
                src={aboutMe.bannerImage || ""}
                alt={aboutMe.name}
                className="object-fill rounded-xl mt-6 opacity-50 hover:opacity-0 transition-opacity duration-300"
              />
            </section>
          )
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-[#111111]">
      {/* Quick Links Bar with Burger Menu */}
      <div className="fixed left-0 top-0 z-50 w-full bg-[#FFFCF8] dark:bg-[#111111] flex items-center justify-between">
        {/* Burger button for mobile */}
        <div className="flex items-center md:hidden ml-4">
          <button
            className="p-2 z-10 italic text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 bg-[#FFFCF8] dark:bg-[#111111] rounded-lg shadow-md"
            aria-label="Open quick links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕ Close ←" : "🍔 Menu →"}
          </button>
        </div>
        {/* Quick links: vertical pane on mobile, horizontal bar on desktop */}
        <div
          className={`
            transition-all duration-300
            ${menuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}
            md:max-h-none md:py-2 md:opacity-100
            w-full
            bg-[#FFFCF8] dark:bg-[#111111]
            md:bg-transparent
            md:static
            absolute left-0 top-full
            md:top-0
            shadow-sm
          `}
        >
          <nav
            className={`
              flex flex-col items-center gap-4
              md:flex-row md:justify-center md:gap-2
              text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 text-center
            `}
          >
            {/* <span className="hidden md:inline italic">Navigate →</span> */}
            {quickLinks.map((link) => (
              <button
                key={link.label}
                className={`underline hover:text-blue-900 dark:hover:text-blue-300 mx-2 italic bg-transparent border-none p-0 cursor-pointer
      ${selectedSection === link.section ? "font-bold text-blue-900 dark:text-blue-300" : ""}
    `}
                onClick={() => {
                  navigateTo(link.section);
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-8 py-28">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="">
              <div className="">
              </div>
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>
          {/* Right Column - Scrolling Content */}
          <div className={`col-span-12 md:col-span-7 md:col-start-6 ${selectedSection === null ? 'space-y-12' : 'space-y-24'}`}>
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
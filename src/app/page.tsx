'use client';
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
import { ExtraEntry } from "@/components/extra-entry";
import { extraData } from "@/data/extra";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const quickLinks = [
  { label: "Start", section: null },
  { label: "Research", section: Section.Portfolio },
  { label: "Publications", section: Section.Publication },
  { label: "Timeline", section: Section.Timeline },
  { label: "Awards", section: Section.Award },
  { label: "Extra", section: Section.Extra },
];

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") as Section | null;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(
    initialSection && Object.values(Section).includes(initialSection as Section)
      ? initialSection
      : null
  );

  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    navRefs.current.forEach((btn) => {
      if (!btn) return;
      const before = window.getComputedStyle(btn, "::before");
      // The ::before width equals the bold-rendered label width.
      // We don't actually need to read it — setting min-width via the
      // ::before placeholder already locks the button width to the bold
      // version of the label. This effect is reserved for future tweaks.
      void before;
    });
  }, []);

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
                className="font-serif text-base leading-relaxed text-muted [&_a]:underline [&_a]:text-foreground [&_a:hover]:text-muted"
                dangerouslySetInnerHTML={{ __html: aboutMe.description }}
              />
            </section>
          )}
          {newsData.length > 0 && (
            <section id="recent-highlights">
              <h2 className="font-serif font-bold text-xl mb-8 tracking-wide uppercase border-b border-foreground">
                Recent Highlights
              </h2>
              <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
                {(showAllNews ? newsData : newsData.slice(0, 4)).map((news, index) => (
                  <NewsEntry key={index} news={news} />
                ))}
              </div>
              {!showAllNews && newsData.length > 4 && (
                <div className="flex justify-end items-center gap-2 mt-8">
                  <button
                    onClick={() => setShowAllNews(true)}
                    className="text-base text-muted italic hover:text-accent bg-transparent border-none p-0 cursor-pointer opacity-30"
                  >
                    Show more →
                  </button>
                </div>
              )}
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
              <h2 className="font-serif font-bold text-xl mb-8 tracking-wide uppercase border-b border-foreground">
                Recent Highlights
              </h2>
              <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
                {newsData.map((news, index) => (
                  <NewsEntry key={index} news={news} />
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
                  <h2 className="font-serif font-bold text-xl mb-8 tracking-wide uppercase border-b border-foreground">
                    Education
                  </h2>
                  <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
                    {educationData.map((education, index) => (
                      <EducationEntry key={index} education={education} />
                    ))}
                  </div>
                </>
              )}
              {experienceData.length > 0 && (
                <>
                  <h2 className="font-serif font-bold text-xl mb-8 mt-12 tracking-wide uppercase border-b border-foreground">
                    Experience
                  </h2>
                  <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
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
              <div className="flex justify-between items-baseline mb-8 border-b border-foreground">
                <h2 className="font-serif font-bold text-xl tracking-wide uppercase">
                  Publications
                </h2>
                <p className="text-base text-muted italic opacity-35 shrink-0">
                  * means co-first author
                </p>
              </div>
              <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
                {publicationData.map((publication, index) => (
                  <PublicationEntry key={index} publication={publication} />
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
              <p className="text-sm text-muted mb-4 leading-relaxed">
                A collection of previous and ongoing research projects.
              </p>
              <h2 className="font-serif font-bold text-xl mb-8 tracking-wide uppercase border-b border-foreground">
                Research
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {portfolioData.map((portfolio, index) => (
                  <PortfolioEntry key={index} index={index} portfolio={portfolio} />
                ))}
              </div>
            </section>
          )
        );
      case Section.Award:
        return (
          awardData.length > 0 && (
            <section id="awards">
              <h2 className="font-serif font-bold text-xl mb-8 tracking-wide uppercase border-b border-foreground">
                Awards
              </h2>
              <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
                {awardData.map((award, index) => (
                  <AwardEntry key={index} award={award} />
                ))}
              </div>
            </section>
          )
        );
      case Section.Extra:
        return (
          extraData.length > 0 && (
            <section id="extra">
              <h2 className="font-serif font-bold text-xl mb-8 tracking-wide uppercase border-b border-foreground">
                Extra
              </h2>
              <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
                {extraData.map((extra, index) => (
                  <ExtraEntry key={index} extra={extra} />
                ))}
              </div>
            </section>
          )
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top-left theme toggle */}
      <div className="fixed left-4 top-3 z-[60] hidden md:block opacity-50 hover:opacity-100 transition-opacity duration-300">
        <ThemeToggle />
      </div>

      {/* Quick Links Bar with Burger Menu */}
      <div className="fixed left-0 top-0 z-50 w-full bg-background flex items-center justify-between">
        {/* Burger button for mobile */}
        <div className="flex items-center md:hidden ml-4">
          <button
            className="p-2 z-10 italic font-serif text-base leading-relaxed text-foreground bg-background rounded-lg shadow-md"
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
            bg-background
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
              text-base leading-relaxed text-foreground text-center font-serif
            `}
          >
            {/* <span className="hidden md:inline italic">Navigate →</span> */}
            {quickLinks.map((link, idx) => (
              <button
                key={link.label}
                ref={(el) => {
                  navRefs.current[idx] = el;
                }}
                data-label={link.label}
                className={`nav-link hover:text-accent mx-2 italic bg-transparent border-none p-0 cursor-pointer
      ${selectedSection === link.section ? "font-bold text-accent underline" : "text-foreground/50"}
    `}
                onClick={() => {
                  navigateTo(link.section);
                }}
              >
                <span>{link.label}</span>
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
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div key={selectedSection ?? 'home'} className={`animate-fade-in ${selectedSection === null ? 'space-y-12' : ''}`}>
              {renderSection()}
            </div>
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

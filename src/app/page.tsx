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
import { sectionOrder, Section } from "@/data/section-order";
import { AwardEntry } from "@/components/award-entry";
import { awardData } from "@/data/award";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      {/* <div className="sticky top-0 left-0 z-50 p-2">
        <p
          className="font-serif text-sm leading-relaxed [&_a]:underline [&_a:hover]:text-blue-900"
          dangerouslySetInnerHTML={{
            __html: `
        <i>Quick Links:
        <a href="#recent-highlights">Recent Highlights</a> <b>|</b> 
        <a href="#research">Research</a> <b>|</b>
        <a href="#publications">Publications</a> <b>|</b>
        <a href="#education">Education</a> <b>|</b>
        <a href="#experience">Experience</a> <b>|</b>
        <a href="#awards">Awards</a></i>
      `,
          }}
        />
      </div> */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
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
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
                {/* <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <i>Quick Links:
                      <a href="#recent-highlights">Recent Highlights</a> | 
                      <a href="#research">Research</a> |
                      <a href="#publications">Publications</a> | 
                      <a href="#education">Education</a> | 
                      <a href="#experience">Experience</a> | 
                      <a href="#awards">Awards</a></i>
                    `,
                  }}
                /> */}
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName} id="recent-highlights">
                        <h2 className="font-serif font-bold text-l mb-12 tracking-wide uppercase">
                          Recent Highlights
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} id="education">
                        <h2 className="font-serif font-bold text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName} id="publications">
                        <h2 className="font-serif font-bold text-l mb-12 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} id="experience">
                        <h2 className="font-serif font-bold text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} id="research">
                        <h2 className="font-serif font-bold text-md mb-12 tracking-wide uppercase">
                          Research
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
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
                case Section.Award:
                  return (
                    awardData.length > 0 && (
                      <section key={sectionName} id="awards">
                        <h2 className="font-serif font-bold text-md mb-12 tracking-wide uppercase">
                          Awards
                        </h2>
                        <div className="space-y-12">
                          {awardData.map((award, index) => (
                            <div key={index}>
                              <AwardEntry key={index} award={award} />
                              {index < awardData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

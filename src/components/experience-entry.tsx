import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-sm text-accent mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-lg font-serif">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.advisor && (
          <p className="text-base text-muted leading-relaxed italic mt-2">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-base text-muted leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.details && (
          <ul className="list-none text-sm text-muted/80 mt-1 space-y-0.5">
            {experience.details.map((d, i) => (
              <li key={i} className="before:content-['›'] before:mr-2 before:text-accent/60"><span className="italic">{d}</span></li>
            ))}
          </ul>
        )}
        {experience.description && (
          <p className="text-base text-muted leading-relaxed mt-2">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}

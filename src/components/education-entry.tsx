import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-sm text-accent mt-1">{education.year}</span>
      <div className="col-span-3">
        <h3 className="text-lg mb-1 font-serif">{education.institution}</h3>
        <p className="text-base text-muted">{education.degree}</p>
        {education.advisor && (
          <p
            className="text-base text-muted mt-2 italic [&_small]:text-sm [&_small]:text-muted"
            dangerouslySetInnerHTML={{ __html: `Advisor: ${education.advisor}` }}
          />
        )}
        {education.details && (
          <ul className="list-none text-sm text-muted/80 mt-1 space-y-0.5">
            {education.details.map((d, i) => (
              <li key={i} className="before:content-['›'] before:mr-2 before:text-accent/60"><span className="italic">{d}</span></li>
            ))}
          </ul>
        )}
        {/* thesis hidden — uncomment to restore */}
        {/* {education.thesis && (
          <p className="text-sm text-muted mt-2 italic">
            Thesis:{" "}
            {education.thesisUrl ? (
              <a
                href={education.thesisUrl}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {education.thesis}
              </a>
            ) : (
              education.thesis
            )}
          </p>
        )} */}
      </div>
    </div>
  );
}

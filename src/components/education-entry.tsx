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

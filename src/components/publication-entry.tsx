import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";
import { DISABLED_LINK_CLASSES, DISABLED_LINK_ICON_CLASSES } from "@/lib/constants";

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-sm text-muted">
            <span className="font-semibold text-accent uppercase tracking-wider">{publication.year}</span>
            <span className="text-muted"> · </span>
            <b>{publication.conference}</b>{publication.full_conf && <> {publication.full_conf}</>}
          </span>
          {publication.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 dark:from-amber-900/30 dark:to-rose-900/30 rounded-md items-center shadow-md border border-amber-100/50 dark:border-amber-800/30 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 dark:via-zinc-700/90 to-transparent" />
              <p className="text-sm text-amber-700 dark:text-amber-400 font-medium relative">
                {publication.award}
              </p>
            </div>
          )}
        </div>
        <h3 className="font-serif text-base mb-2">{publication.title}</h3>
        <p
          className="text-sm text-muted mb-3"
          dangerouslySetInnerHTML={{ __html: publication.authors }}
        />
        <div className="flex flex-row gap-5">
          {publication.paperUrl && (publication.showLinks ? (
            <a
              href={publication.paperUrl}
              className="group inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              <ArrowUpRight
                size={10}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">{publication.pub_type}</span>
            </a>
          ) : (
            <span className={`inline-flex items-center gap-1.5 text-xs ${DISABLED_LINK_CLASSES}`}>
              <ArrowUpRight size={10} className={DISABLED_LINK_ICON_CLASSES} />
              <span className="tracking-wider uppercase">{publication.pub_type}</span>
            </span>
          ))}
          {publication.codeUrl && (publication.showLinks ? (
            <a
              href={publication.codeUrl}
              className="group inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              <ArrowUpRight
                size={10}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          ) : (
            <span className={`inline-flex items-center gap-1.5 text-xs ${DISABLED_LINK_CLASSES}`}>
              <ArrowUpRight size={10} className={DISABLED_LINK_ICON_CLASSES} />
              <span className="tracking-wider uppercase">Code</span>
            </span>
          ))}
          {publication.bibtex && (publication.showLinks ? (
            <a
              href={publication.bibtex}
              className="group inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              <ArrowUpRight
                size={10}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          ) : (
            <span className={`inline-flex items-center gap-1.5 text-xs ${DISABLED_LINK_CLASSES}`}>
              <ArrowUpRight size={10} className={DISABLED_LINK_ICON_CLASSES} />
              <span className="tracking-wider uppercase">BibTeX</span>
            </span>
          ))}
        </div>
        {publication.tldr && (
          <p className="text-sm text-muted/80 mt-2 leading-relaxed">
            {publication.tldr}
          </p>
        )}
      </div>
    </div>
  );
}

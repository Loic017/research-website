import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { Portfolio } from "@/data/portfolio";
import { DISABLED_LINK_CLASSES, DISABLED_LINK_ICON_CLASSES } from "@/lib/constants";

export function PortfolioEntry({ index, portfolio, onProjectClick }: { index: number; portfolio: Portfolio; onProjectClick?: (slug: string) => void }) {
  const [showLightbox, setShowLightbox] = useState(false);

  const close = useCallback(() => setShowLightbox(false), []);

  useEffect(() => {
    if (!showLightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [showLightbox, close]);

  return (
    <>
      <div className="group border border-border/60 dark:border-foreground/10 rounded-xl overflow-hidden flex flex-col hover:border-foreground/40 dark:hover:border-foreground/20 transition-colors duration-300">
        {portfolio.imageUrl && (
          <div
            className="relative mx-4 mt-4 rounded-xl overflow-hidden h-36 cursor-pointer group"
            onClick={() => setShowLightbox(true)}
          >
            <Image
              src={portfolio.imageUrl}
              alt={portfolio.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={12} className="text-foreground" />
            </div>
          </div>
        )}
        <div className="p-4 flex flex-col flex-1">
        <div className="text-sm text-muted mb-2 flex items-center gap-2 flex-wrap">
          {portfolio.showMeta && portfolio.technologies && portfolio.technologies.length > 0 ? (
            <span>
              <span className="font-semibold text-accent uppercase tracking-wider">{index + 1}</span>
              <span className="text-muted"> · </span>
              <span>{portfolio.technologies.join(", ")}</span>
            </span>
          ) : (
            <span className="font-semibold text-accent uppercase tracking-wider">{index + 1}</span>
          )}
        </div>

        <h3 className="font-serif text-base mb-2">{portfolio.title}</h3>

        {portfolio.description && (
          <p
            className="text-sm text-muted leading-relaxed mb-3 [&_a]:underline [&_a]:text-foreground [&_a:hover]:text-muted"
            dangerouslySetInnerHTML={{ __html: portfolio.description }}
          />
        )}

        {portfolio.showMeta && (
          <div className="flex gap-4 mt-auto">
            {portfolio.slug && portfolio.projectLink !== false ? (
              <Link
                href={`/research/${portfolio.slug}`}
                onClick={onProjectClick ? (e) => { e.preventDefault(); onProjectClick(portfolio.slug!); } : undefined}
                className="project-link group/project-link inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                <ArrowUpRight
                  size={10}
                  className="group-hover/project-link:translate-x-0.5 group-hover/project-link:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Project</span>
              </Link>
            ) : portfolio.slug && (
              <span className={`inline-flex items-center gap-1.5 text-xs ${DISABLED_LINK_CLASSES}`}>
                <ArrowUpRight size={10} className={DISABLED_LINK_ICON_CLASSES} />
                <span className="tracking-wider uppercase">Project</span>
              </span>
            )}
            {portfolio.codeUrl && (
              <a
                href={portfolio.codeUrl}
                className="group/link inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                <ArrowUpRight
                  size={10}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Code</span>
              </a>
            )}
          </div>
        )}
        </div>
      </div>

      {showLightbox && portfolio.imageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={portfolio.imageUrl}
              alt={portfolio.title}
              width={1600}
              height={1200}
              className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg drop-shadow-2xl"
              sizes="90vw"
            />
            <button
              className="absolute -top-3 -right-3 z-10 w-7 h-7 rounded-full bg-background/90 dark:bg-zinc-800/90 flex items-center justify-center hover:bg-background dark:hover:bg-zinc-800 transition-colors"
              onClick={close}
            >
              <X size={13} className="text-foreground" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

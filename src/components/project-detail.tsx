'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function ProjectDetail({ project }: { project: Portfolio }) {
  return (
    <div className="animate-fade-in space-y-8">
      <Link
        href="/?section=portfolio"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-300"
      >
        <ArrowLeft size={14} />
        <span className="tracking-wider uppercase">Back to Research</span>
      </Link>

      <h2 className="font-serif font-bold text-xl tracking-wide uppercase border-b border-foreground pb-2">
        {project.title}
      </h2>

      {project.body && (
        <div
          className="font-serif text-base leading-relaxed text-muted [&_a]:underline [&_a]:text-foreground [&_a:hover]:text-muted"
          dangerouslySetInnerHTML={{ __html: project.body }}
        />
      )}

      {project.infoList && project.infoList.length > 0 && (
        <ul className="space-y-1.5">
            {project.infoList.map((item, i) => (
              <li key={i} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                <span className="text-foreground/40 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div>
          <h3 className="font-serif font-semibold text-sm tracking-wide uppercase mb-3">
            Gallery
          </h3>
          <div className="space-y-4">
            {project.gallery.map((img, i) => {
              const w = typeof img === 'string' ? 1600 : img.width;
              const h = typeof img === 'string' ? 1200 : img.height;
              return (
                <Image
                  key={i}
                  src={img}
                  alt={`${project.title} image ${i + 1}`}
                  width={w}
                  height={h}
                  className="w-full h-auto rounded-xl dark:opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

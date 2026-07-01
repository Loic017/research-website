import { Extra } from "@/data/extra";

export function ExtraEntry({ extra }: { extra: Extra }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">{extra.year}</span>
      </div>
      <h3 className="font-serif text-base text-foreground mb-2">{extra.title}</h3>
      {extra.description && (
        <p className="text-sm text-muted leading-relaxed">{extra.description}</p>
      )}
    </div>
  );
}

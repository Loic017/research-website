export function ExtraBioBlock({ html }: { html: string }) {
  return (
    <div
      className="font-serif text-base leading-relaxed text-muted [&_a]:underline [&_a]:text-foreground [&_a:hover]:text-muted"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

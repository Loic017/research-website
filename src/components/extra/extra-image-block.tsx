import Image from "next/image";
import { ExtraImage } from "@/data/extra";

export function ExtraImageBlock({ src, alt, caption }: { src: ExtraImage; alt?: string; caption?: string }) {
  return (
    <figure>
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={alt ?? caption ?? "Image"}
          fill
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

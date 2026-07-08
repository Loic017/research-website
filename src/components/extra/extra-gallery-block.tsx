import { ImageGallery } from "@/components/image-gallery";
import { ExtraImage } from "@/data/extra";

export function ExtraGalleryBlock({ images, caption }: { images: ExtraImage[]; caption?: string }) {
  return (
    <figure>
      <ImageGallery images={images} />
      {caption && (
        <figcaption className="text-center text-sm text-muted mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

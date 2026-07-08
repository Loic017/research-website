import { ExtraBlock } from "@/data/extra";
import { ExtraBioBlock } from "./extra-bio-block";
import { ExtraImageBlock } from "./extra-image-block";
import { ExtraGalleryBlock } from "./extra-gallery-block";
import { ExtraAwardBlock } from "./extra-award-block";

function Block({ block }: { block: ExtraBlock }) {
  switch (block.type) {
    case "bio":
      return <ExtraBioBlock html={block.html} />;
    case "image":
      return <ExtraImageBlock src={block.src} alt={block.alt} caption={block.caption} />;
    case "gallery":
      return <ExtraGalleryBlock images={block.images} caption={block.caption} />;
    case "award":
      return (
        <ExtraAwardBlock
          year={block.year}
          title={block.title}
          institution={block.institution}
          tldr={block.tldr}
          icon={block.icon}
        />
      );
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

export function ExtraSection({ blocks }: { blocks: ExtraBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={block.type === "award" ? "item-separator pt-6" : ""}
        >
          <Block block={block} />
        </div>
      ))}
    </div>
  );
}

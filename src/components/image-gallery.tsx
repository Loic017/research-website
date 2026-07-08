'use client';
import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export function ImageGallery({ images }: { images: (string | StaticImageData)[] }) {
  const [current, setCurrent] = useState(0);
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrent((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setCurrent((i) => Math.min(images.length - 1, i + 1));
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [images.length]);

  if (images.length === 0) return null;

  const single = images.length === 1;

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden">
        <div
          className="relative aspect-video cursor-pointer group"
          onClick={() => setShowLightbox(true)}
        >
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Gallery image ${i + 1}`}
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${
                i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            />
          ))}
          <div className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 size={13} className="text-foreground" />
          </div>
        </div>
        {!single && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrent((i) => Math.max(0, i - 1)); }}
              disabled={current === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 z-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-30 hover:bg-background/90 transition-all"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrent((i) => Math.min(images.length - 1, i + 1)); }}
              disabled={current === images.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 z-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-30 hover:bg-background/90 transition-all"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-foreground scale-125" : "bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {showLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <div
            className="relative w-[90vw] h-[90vh] flex items-center justify-center animate-lightbox-in"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="90vw"
                className={`object-contain absolute inset-0 transition-opacity duration-500 ease-in-out rounded-lg drop-shadow-2xl ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              />
            ))}
            <button
              className="absolute -top-3 -right-3 z-10 w-7 h-7 rounded-full bg-background/90 dark:bg-zinc-800/90 flex items-center justify-center hover:bg-background dark:hover:bg-zinc-800 transition-colors"
              onClick={close}
            >
              <X size={13} className="text-foreground" />
            </button>
          </div>
          {!single && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrent((i) => Math.max(0, i - 1)); }}
                disabled={current === 0}
                className="fixed left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center disabled:opacity-20 hover:bg-background/40 transition-all"
              >
                <ChevronLeft size={22} className="text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrent((i) => Math.min(images.length - 1, i + 1)); }}
                disabled={current === images.length - 1}
                className="fixed right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center disabled:opacity-20 hover:bg-background/40 transition-all"
              >
                <ChevronRight size={22} className="text-white" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

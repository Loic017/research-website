'use client';
import { ArrowLeft } from "lucide-react";
import { News } from "@/data/news";
import { NewsEntry } from "@/components/news-entry";

export function AllNewsView({ news, onBack }: { news: News[]; onBack: () => void }) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
      >
        <ArrowLeft size={14} />
        <span className="tracking-wider uppercase">Back</span>
      </button>

      <h2 className="font-serif font-bold text-xl tracking-wide uppercase border-b border-foreground pb-2">
        All Highlights
      </h2>

      <div className="space-y-6 [&>*+*]:item-separator [&>*+*]:pt-6">
        {news.map((item, index) => (
          <NewsEntry key={index} news={item} />
        ))}
      </div>
    </div>
  );
}

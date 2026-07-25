import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkedInEmbed, { type LinkedInPost } from "./LinkedInEmbed";

type MediaViewerProps = {
  images?: string[];
  linkedInPosts?: LinkedInPost[];
};

type MediaItem =
  | {
      type: "image";
      src: string;
    }
  | ({
      type: "linkedin";
    } & LinkedInPost);

export default function MediaViewer({
  images = [],
  linkedInPosts = [],
}: MediaViewerProps) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const media = useMemo<MediaItem[]>(
    () => [
      ...images.map((src) => ({ type: "image" as const, src })),
      ...linkedInPosts.map((post) => ({
        type: "linkedin" as const,
        ...post,
      })),
    ],
    [images, linkedInPosts],
  );
  const hasMultipleItems = media.length > 1;
  const currentItem = media[index];
  const isLinkedInPost = currentItem?.type === "linkedin";

  useEffect(() => {
    if (index >= media.length) {
      setIndex(0);
    }
  }, [index, media.length]);

  const prev = () =>
    setIndex((current) => (current - 1 + media.length) % media.length);
  const next = () =>
    setIndex((current) => (current + 1) % media.length);

  if (!currentItem) {
    return null;
  }

  return (
    <section
      aria-label={t("mediaViewer.label")}
      className={`flex w-full flex-col overflow-hidden rounded-xl bg-black/10 dark:bg-black/25 ${
        isLinkedInPost
          ? "h-auto"
          : "h-[70svh] min-h-[420px] max-h-[720px]"
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          isLinkedInPost
            ? "overflow-visible"
            : "min-h-0 flex-1 overflow-hidden"
        }`}
      >
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            alt={t("mediaViewer.imageAlt", { number: index + 1 })}
            className="h-full w-full object-contain p-1 sm:p-4"
          />
        ) : (
          <LinkedInEmbed {...currentItem} />
        )}
      </div>

      {hasMultipleItems && (
        <nav
          aria-label={t("mediaViewer.navigation")}
          className="flex h-14 shrink-0 items-center justify-center gap-4 border-t border-black/10 bg-white/70 px-3 backdrop-blur-sm dark:border-white/10 dark:bg-gray-950/70"
        >
          <button
            type="button"
            onClick={prev}
            aria-label={t("mediaViewer.previous")}
            className="flex size-10 items-center justify-center rounded-full bg-black/70 text-white shadow-sm transition hover:bg-black/85"
          >
            <ChevronLeft className="size-6" />
          </button>

          <span
            aria-live="polite"
            className="min-w-24 text-center text-sm font-medium"
          >
            {t("mediaViewer.position", {
              current: index + 1,
              total: media.length,
            })}
          </span>

          <button
            type="button"
            onClick={next}
            aria-label={t("mediaViewer.next")}
            className="flex size-10 items-center justify-center rounded-full bg-black/70 text-white shadow-sm transition hover:bg-black/85"
          >
            <ChevronRight className="size-6" />
          </button>
        </nav>
      )}
    </section>
  );
}

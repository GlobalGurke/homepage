import { FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export type LinkedInPost = {
  embedUrl: string;
  postUrl?: string;
  title?: string;
};

type LinkedInEmbedProps = LinkedInPost;

function getPublicPostUrl(embedUrl: string) {
  return embedUrl
    .replace("/embed/feed/update/", "/feed/update/")
    .split("?")[0];
}

export default function LinkedInEmbed({
  embedUrl,
  postUrl,
  title,
}: LinkedInEmbedProps) {
  const { t } = useTranslation();
  const accessibleTitle = title ?? t("mediaViewer.linkedinTitle");

  return (
    <div className="w-full p-2 sm:p-4">
      <article className="mx-auto w-full max-w-[504px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md dark:border-gray-700 dark:bg-gray-950">
        <header className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3 dark:border-gray-800">
          <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-100">
            <FaLinkedin className="size-5 text-[#0a66c2]" aria-hidden="true" />
            <span>{t("mediaViewer.linkedinPost")}</span>
          </div>
          <a
            href={postUrl ?? getPublicPostUrl(embedUrl)}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
          >
            {t("mediaViewer.openLinkedIn")}
          </a>
        </header>

        <div className="aspect-[504/628] w-full bg-white">
          <iframe
            src={embedUrl}
            title={accessibleTitle}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </article>
    </div>
  );
}

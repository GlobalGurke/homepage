import type { ReactNode } from "react";
import Gallery from "./Gallery";
import type { LinkedInPost } from "./LinkedInEmbed";

type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string[];
  images?: string[];
  linkedInPosts?: LinkedInPost[];
  links?: {
    demo?: string;
    github?: string;
  };
  children?: ReactNode;
};

export const ProjectCard = ({
  title,
  description,
  tech,
  images,
  linkedInPosts,
  links,
  children,
}: ProjectCardProps) => {
  const hasMedia = Boolean(images?.length || linkedInPosts?.length);

  return (
    <div className="rounded-2xl bg-gray-200 p-6 shadow-lg transition duration-200 hover:shadow-xl dark:bg-gray-900">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-sm">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tech?.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-gray-700 bg-gray-300 px-2 py-1 text-xs dark:bg-gray-800"
          >
            {technology}
          </span>
        ))}
      </div>

      {hasMedia && (
        <Gallery images={images} linkedInPosts={linkedInPosts} />
      )}

      <div className="mt-4 flex gap-3">
        {links?.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm transition hover:bg-blue-700"
          >
            Live Demo
          </a>
        )}
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gray-700 px-3 py-2 text-sm transition hover:bg-gray-600"
          >
            GitHub
          </a>
        )}
      </div>

      {children}
    </div>
  );
};

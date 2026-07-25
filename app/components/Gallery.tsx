import MediaViewer from "./MediaViewer";
import type { LinkedInPost } from "./LinkedInEmbed";

type GalleryProps = {
  images?: string[];
  linkedInPosts?: LinkedInPost[];
};

export default function Gallery({ images, linkedInPosts }: GalleryProps) {
  return <MediaViewer images={images} linkedInPosts={linkedInPosts} />;
}

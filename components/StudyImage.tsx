import Image from "next/image";

type StudyImageProps = {
  src: string | null;
  alt: string;
  archiveId: string;
  className?: string;
  priority?: boolean;
};

export function StudyImage({
  src,
  alt,
  archiveId,
  className = "",
  priority = false,
}: StudyImageProps) {
  if (!src) {
    return (
      <div className={`archive-placeholder ${className}`}>
        <span className="placeholder-id">
          {archiveId}
        </span>

        <span className="placeholder-mark">
          FA
        </span>

        <span className="placeholder-status">
          Image Pending
        </span>
      </div>
    );
  }

  return (
    <div className={`archive-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
        priority={priority}
      />

      <div
        className="preview-watermark"
        aria-hidden="true"
      >
        FIGURE ARCHIVES
      </div>

      <div className="preview-id">
        {archiveId}
      </div>
    </div>
  );
}

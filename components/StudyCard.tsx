import Link from "next/link";

import type { Study } from "@/lib/data";
import { StudyImage } from "@/components/StudyImage";

export function StudyCard({
  study,
}: {
  study: Study;
}) {
  return (
    <Link
      href={`/study/${study.slug}`}
      className="study-card"
    >
      <StudyImage
        src={study.cover}
        alt={`${study.title} by ${study.artist}`}
        archiveId={study.id}
        className="study-card-image"
      />

      <div className="study-meta">
        <div>
          <div className="study-small">
            {study.id} · {study.category}
          </div>

          <h3 className="study-title">
            {study.title}
          </h3>

          <div className="study-small">
            {study.artist}
          </div>
        </div>

        <div className="study-small">
          ${study.price}
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import type { Study } from "@/lib/data";

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
      <div className="image">
        <span className="art-caption">
          {study.id}
        </span>
      </div>

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

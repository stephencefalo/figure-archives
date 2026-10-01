import Link from "next/link";

import {
  collections,
  getStudyReferenceCount,
} from "@/lib/data";

import { StudyViewer } from "@/components/StudyViewer";

export default function RecliningFigureStudyPage() {
  const collection = collections.find(
    (item) =>
      item.slug === "fa-0001-the-figure-volume-i"
  );

  if (!collection) {
    return null;
  }

  const study = collection.studies.find(
    (item) => item.code === "S01"
  );

  if (!study) {
    return null;
  }

  const referenceCount =
    getStudyReferenceCount(study);

  const firstPose = study.poses[0];

  return (
    <main>
      <section className="study-hero shell">
        <div className="study-record-line">
          <span>
            {collection.id} / {study.code}
          </span>

          <span>Study</span>

          <span>{collection.year}</span>

          <span>{collection.location}</span>
        </div>

        <div className="eyebrow">
          {collection.category}
        </div>

        <h1>{study.title}</h1>

        <div className="study-credit">
          <span>Photography</span>

          <Link
            href={`/artists/${collection.artistSlug}`}
          >
            {collection.artist}
          </Link>
        </div>
      </section>

      <section className="study-viewer-section shell">
        <div className="study-viewer-heading">
          <div>
            <div className="eyebrow">
              Study Viewer
            </div>

            <h2>
              See the figure
              <br />
              from every side.
            </h2>
          </div>

          <p>
            Each pose is documented from five
            consistent viewpoints to help reveal
            proportion, volume, silhouette, and
            three-dimensional form.
          </p>
        </div>

        {firstPose && (
          <div className="study-pose-block">
            <div className="study-pose-heading">
              <span>
                {collection.id} / {study.code} /{" "}
                {firstPose.code}
              </span>

              <h3>{firstPose.title}</h3>

              <span>5 Perspectives</span>
            </div>

            <StudyViewer
              studyId={`${collection.id} / ${study.code} / ${firstPose.code}`}
              title={`${study.title} — ${firstPose.title}`}
              views={firstPose.views}
            />
          </div>
        )}
      </section>

      <section className="study-poses shell">
        <div className="study-poses-header">
          <div>
            <div className="eyebrow">
              Included Poses
            </div>

            <h2>
              Three poses.
              <br />
              Fifteen references.
            </h2>
          </div>

          <p>
            Each pose includes front,
            three-quarter front, profile,
            three-quarter rear, and rear
            perspectives.
          </p>
        </div>

        <div className="study-pose-list">
          {study.poses.map((pose, index) => (
            <article
              className="study-pose-row"
              key={pose.id}
            >
              <span className="study-pose-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="eyebrow">
                  {pose.code} · Pose
                </div>

                <h3>{pose.title}</h3>
              </div>

              <div className="study-pose-angles">
                {pose.views.map((view) => (
                  <span key={view.id}>
                    {view.code} {view.angle}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="study-about shell">
        <div>
          <div className="eyebrow">
            About This Study
          </div>

          <h2>{study.title}</h2>
        </div>

        <div className="study-about-copy">
          <p>{study.description}</p>

          <div className="study-specs">
            <div>
              <span>References</span>
              <strong>{referenceCount}</strong>
            </div>

            <div>
              <span>Poses</span>
              <strong>{study.poses.length}</strong>
            </div>

            <div>
              <span>Perspectives</span>
              <strong>5</strong>
            </div>

            <div>
              <span>Lighting</span>
              <strong>
                {collection.lighting}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="study-acquire">
        <div className="shell study-acquire-inner">
          <div>
            <div className="eyebrow">
              Individual Study
            </div>

            <h2>
              Acquire
              <br />
              {collection.id} / {study.code}.
            </h2>
          </div>

          <div className="study-acquire-copy">
            <p>
              Receive all {referenceCount}{" "}
              high-resolution reference images
              included in this study.
            </p>

            <div className="study-price">
              <span>Complete Study</span>

              <strong>${study.price}</strong>
            </div>

            <button
              className="btn dark"
              type="button"
            >
              Acquire Study
            </button>

            <small>
              High-resolution files · Artist
              Reference License included
            </small>

            <Link
              href={`/collection/${collection.slug}`}
              className="linkline"
            >
              View Complete Collection →
            </Link>
          </div>
        </div>
      </section>

      <section className="collection-license shell">
        <div>
          <div className="eyebrow">
            Artist Reference License
          </div>

          <h2>
            Study it.
            <br />
            Transform it.
          </h2>
        </div>

        <div>
          <p>
            Draw it. Paint it. Sculpt it.
            Create original artwork from the
            reference and sell the artwork you
            create.
          </p>

          <p>
            The original reference photographs
            may not be resold, redistributed,
            published, or shared as standalone
            images.
          </p>

          <Link
            href="/licensing"
            className="linkline"
          >
            Read the Artist Reference License →
          </Link>
        </div>
      </section>
    </main>
  );
}

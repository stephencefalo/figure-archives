import type { Metadata } from "next";
import Link from "next/link";

import {
  collections,
  getCollectionPoseCount,
  getCollectionReferenceCount,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Explore curated photographic figure reference collections created for painters, illustrators, sculptors, and students.",
};

export default function ArchivePage() {
  return (
    <main>
      <section className="page-hero shell">
        <div className="eyebrow">
          The Archive · 2026
        </div>

        <h1>
          Figure
          <br />
          Archives
        </h1>

        <p>
          Curated photographic reference organized
          into complete collections for the serious
          study of form, gesture, light, movement,
          and perspective.
        </p>
      </section>

      <section className="archive-collections shell">
        <div className="archive-collections-header">
          <div>
            <div className="eyebrow">
              Enter the Archive
            </div>

            <h2>
              Complete
              <br />
              Collections
            </h2>
          </div>

          <p>
            Each numbered collection contains a
            series of focused studies, poses, and
            multiple viewpoints designed to help
            artists understand the figure as form
            in space.
          </p>
        </div>

        <div className="archive-collection-list">
          {collections.map((collection) => {
            const references =
              getCollectionReferenceCount(collection);

            const poses =
              getCollectionPoseCount(collection);

            return (
              <Link
                key={collection.slug}
                href={`/collection/${collection.slug}`}
                className="archive-collection-entry"
              >
                <div className="archive-collection-number">
                  <span>Collection</span>
                  <strong>{collection.id}</strong>
                </div>

                <div className="archive-collection-art">
                  <span>{collection.id}</span>

                  <strong>FA</strong>

                  <small>
                    Enter Collection
                  </small>
                </div>

                <div className="archive-collection-copy">
                  <div className="eyebrow">
                    {collection.category}
                  </div>

                  <h3>{collection.title}</h3>

                  <p>{collection.description}</p>

                  <div className="archive-collection-meta">
                    <span>
                      {collection.studies.length} Studies
                    </span>

                    <span>{poses} Poses</span>

                    <span>
                      {references} References
                    </span>

                    <span>
                      {collection.artist}
                    </span>
                  </div>
                </div>

                <div className="archive-collection-enter">
                  <span>
                    ${collection.collectionPrice}
                  </span>

                  <strong>
                    Enter
                    <br />
                    Collection →
                  </strong>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="archive-method">
        <div className="shell archive-method-inner">
          <div>
            <div className="eyebrow">
              How the Archive Works
            </div>

            <h2>
              Collection.
              <br />
              Study.
              <br />
              Pose.
              <br />
              View.
            </h2>
          </div>

          <div className="archive-method-copy">
            <div>
              <span>01</span>
              <h3>Collection</h3>
              <p>
                A complete photographic figure
                session organized as an archival
                volume.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Study</h3>
              <p>
                A focused package built around a
                position, movement, or visual
                problem.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Pose</h3>
              <p>
                A held figure position documented
                consistently for close study.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>View</h3>
              <p>
                Front, three-quarter, profile,
                three-quarter rear, and rear
                perspectives reveal the form in
                space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="archive-closing shell">
        <div className="eyebrow">
          Figure Archives
        </div>

        <blockquote>
          Not photographs to consume.
          <br />
          References to study,
          <br />
          interpret, and transform.
        </blockquote>
      </section>
    </main>
  );
}

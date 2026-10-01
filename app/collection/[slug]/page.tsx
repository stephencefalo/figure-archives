import Link from "next/link";
import { notFound } from "next/navigation";

import {
  collections,
  getCollection,
  getCollectionPoseCount,
  getCollectionReferenceCount,
  getStudyReferenceCount,
} from "@/lib/data";

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  const referenceCount =
    getCollectionReferenceCount(collection);

  const poseCount =
    getCollectionPoseCount(collection);

  const individualTotal =
    collection.studies.reduce(
      (total, study) => total + study.price,
      0
    );

  const savings =
    individualTotal - collection.collectionPrice;

  return (
    <main>
      <section className="collection-hero shell">
        <div className="collection-record-line">
          <span>{collection.id}</span>
          <span>Collection</span>
          <span>{collection.year}</span>
        </div>

        <div className="collection-hero-grid">
          <div className="collection-hero-copy">
            <div className="eyebrow">
              {collection.category}
            </div>

            <h1>{collection.title}</h1>

            <p className="collection-intro">
              {collection.description}
            </p>

            <div className="collection-credit">
              <span>Photography</span>

              <Link
                href={`/artists/${collection.artistSlug}`}
              >
                {collection.artist}
              </Link>

              <span>{collection.location}</span>
            </div>
          </div>

          <div className="collection-hero-art">
            <span className="collection-art-id">
              {collection.id}
            </span>

            <span className="collection-art-mark">
              FA
            </span>

            <span className="collection-art-label">
              Complete Collection
            </span>
          </div>
        </div>
      </section>

      <section className="collection-overview shell">
        <div className="collection-overview-heading">
          <div className="eyebrow">
            The Complete Collection
          </div>

          <h2>
            One session.
            <br />
            Multiple ways to study.
          </h2>
        </div>

        <div className="collection-stats">
          <div>
            <span>Studies</span>
            <strong>
              {String(collection.studies.length).padStart(
                2,
                "0"
              )}
            </strong>
          </div>

          <div>
            <span>Poses</span>
            <strong>
              {String(poseCount).padStart(2, "0")}
            </strong>
          </div>

          <div>
            <span>References</span>
            <strong>
              {String(referenceCount).padStart(
                2,
                "0"
              )}
            </strong>
          </div>

          <div>
            <span>Perspectives</span>
            <strong>05</strong>
          </div>
        </div>
      </section>

      <section className="collection-studies shell">
        <div className="collection-section-header">
          <div>
            <div className="eyebrow">
              Included Studies
            </div>

            <h2>
              Acquire the collection
              <br />
              or choose a study.
            </h2>
          </div>

          <p>
            Each study is a focused reference
            package. The complete collection
            includes every study below.
          </p>
        </div>

        <div className="collection-study-list">
          {collection.studies.map(
            (study, index) => {
              const studyReferences =
                getStudyReferenceCount(study);

              return (
                <article
                  className="collection-study-row"
                  key={study.id}
                >
                  <div className="collection-study-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="collection-study-image">
                    <span>{study.id}</span>
                    <strong>FA</strong>
                    <small>Preview Pending</small>
                  </div>

                  <div className="collection-study-copy">
                    <div className="eyebrow">
                      {study.code} · Study
                    </div>

                    <h3>{study.title}</h3>

                    <p>{study.description}</p>

                    <div className="collection-study-details">
                      <span>
                        {study.poses.length} Poses
                      </span>

                      <span>
                        {studyReferences} Images
                      </span>

                      <span>
                        5 Perspectives
                      </span>
                    </div>
                  </div>

                  <div className="collection-study-action">
                    <span className="collection-study-price">
                      ${study.price}
                    </span>

                    <span className="collection-study-link">
                      View Study →
                    </span>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </section>

      <section className="collection-acquire">
        <div className="shell collection-acquire-inner">
          <div>
            <div className="eyebrow">
              Complete Collection
            </div>

            <h2>
              Acquire
              <br />
              {collection.id}.
            </h2>
          </div>

          <div className="collection-acquire-copy">
            <p>
              Receive the complete high-resolution
              reference collection: all{" "}
              {collection.studies.length} studies,{" "}
              {poseCount} poses, and{" "}
              {referenceCount} reference images.
            </p>

            <div className="collection-price-block">
              <div>
                <span>Complete Collection</span>
                <strong>
                  ${collection.collectionPrice}
                </strong>
              </div>

              <div>
                <span>Individual studies</span>
                <span>${individualTotal}</span>
              </div>

              {savings > 0 && (
                <div>
                  <span>Collection savings</span>
                  <span>${savings}</span>
                </div>
              )}
            </div>

            <button
              className="btn dark"
              type="button"
            >
              Acquire Complete Collection
            </button>

            <small>
              High-resolution files · Artist
              Reference License included
            </small>
          </div>
        </div>
      </section>

      <section className="collection-license shell">
        <div>
          <div className="eyebrow">
            Artist Reference License
          </div>

          <h2>
            Made to become
            <br />
            something else.
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

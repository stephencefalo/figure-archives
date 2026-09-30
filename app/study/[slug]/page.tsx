import Link from "next/link";
import { notFound } from "next/navigation";

import { studies, getStudy } from "@/lib/data";
import { StudyViewer } from "@/components/StudyViewer";

export function generateStaticParams() {
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main>
      <section className="study-record shell">
        <div className="study-record-top">
          <span>{study.id}</span>

          <span>
            Entered {study.year}
          </span>

          <span>
            {study.location}
          </span>
        </div>

        <div className="study-record-heading">
          <div>
            <div className="eyebrow">
              {study.category}
            </div>

            <h1>
              {study.title}
            </h1>
          </div>

          <div className="study-record-artist">
            <span>Photography</span>

            <Link
              href={`/artists/${study.artistSlug}`}
            >
              {study.artist}
            </Link>
          </div>
        </div>
      </section>

      <section className="study-viewer-section shell">
        <StudyViewer
          studyId={study.id}
          title={study.title}
          views={study.views}
        />
      </section>

      <section className="study-purchase shell">
        <div className="study-purchase-description">
          <div className="eyebrow">
            About This Study
          </div>

          <p>
            {study.description}
          </p>
        </div>

        <div className="study-specification">
          <div>
            <span>References</span>
            <strong>{study.references}</strong>
          </div>

          <div>
            <span>Poses</span>
            <strong>{study.poses}</strong>
          </div>

          <div>
            <span>Perspectives</span>
            <strong>{study.perspectives}</strong>
          </div>

          <div>
            <span>Lighting</span>
            <strong>{study.lighting}</strong>
          </div>
        </div>

        <div className="study-acquisition">
          <div>
            <div className="eyebrow">
              Complete Study
            </div>

            <div className="study-price">
              ${study.price}
            </div>
          </div>

          <div className="study-acquisition-action">
            <button
              className="btn dark"
              type="button"
            >
              Acquire Study
            </button>

            <span>
              High-resolution reference collection
            </span>
          </div>
        </div>
      </section>

      <section className="study-license-band">
        <div className="shell">
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
              Sell the original artwork you
              create from it.
            </p>

            <Link
              href="/licensing"
              className="linkline"
            >
              Read the Artist Reference License →
            </Link>
          </div>
        </div>
      </section>

      <section className="study-closing">
        <div className="shell">
          <div className="eyebrow">
            {study.id}
          </div>

          <blockquote>
            A photograph captures
            a viewpoint. A study
            reveals the form.
          </blockquote>
        </div>
      </section>
    </main>
  );
}

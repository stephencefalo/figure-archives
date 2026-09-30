import Link from "next/link";
import { notFound } from "next/navigation";
import { studies, getStudy } from "@/lib/data";

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
      <section className="study-page shell">

        <div className="study-visual">
          <div className="study-main-image">
            <span className="art-caption">
              {study.id} / PRIMARY STUDY
            </span>

            <span className="study-watermark">
              FIGURE ARCHIVES
            </span>
          </div>

          <div className="study-thumbnails">
            {[1, 2, 3, 4, 5].map((view) => (
              <div className="study-thumb" key={view}>
                <span>
                  V{String(view).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="study-info">

          <div className="eyebrow">
            {study.id} · {study.year}
          </div>

          <h1>{study.title}</h1>

          <div className="study-byline">
            <span>Photography</span>
            <strong>{study.artist}</strong>
          </div>

          <p className="study-description">
            {study.description}
          </p>

          <div className="study-specs">

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

          <div className="study-license">
            <div className="eyebrow">
              Artist Reference License
            </div>

            <p>
              Draw it. Paint it. Sculpt it. Sell the
              original artwork you create from it.
            </p>

            <Link href="/licensing" className="linkline">
              Read the license
            </Link>
          </div>

          <div className="acquire">

            <div>
              <span className="eyebrow">
                Complete Study
              </span>

              <div className="price">
                ${study.price}
              </div>
            </div>

            <button className="btn dark">
              Acquire Study
            </button>

          </div>

          <div className="acquire-note">
            High-resolution reference collection ·
            Permanent access through My Archive
          </div>

        </aside>

      </section>

      <section className="section shell">

        <div className="section-head">
          <div className="eyebrow">
            Inside the Study
          </div>

          <div>
            <h2>
              One pose.
              <br />
              More than one answer.
            </h2>

            <p className="muted">
              Principal poses are documented from
              multiple consistent viewpoints, giving
              artists a better understanding of form
              in three-dimensional space.
            </p>
          </div>
        </div>

        <div className="angle-sequence">

          {["Front", "¾ Front", "Profile", "¾ Rear", "Rear"].map(
            (angle, index) => (
              <div className="angle-card" key={angle}>

                <div className="angle-image">
                  <span>
                    {study.id} / P01 / V
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="angle-label">
                  <span>{angle}</span>
                  <span>
                    {index + 1} / 5
                  </span>
                </div>

              </div>
            )
          )}

        </div>

      </section>

      <section className="study-philosophy">
        <div className="shell">

          <div className="eyebrow">
            The Figure in Space
          </div>

          <p>
            A photograph captures a viewpoint.
            A study should help you understand
            the form beyond it.
          </p>

        </div>
      </section>

    </main>
  );
}

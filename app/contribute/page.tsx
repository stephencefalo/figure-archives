import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute Photography",
  description:
    "Learn about contributing photographic figure studies to Figure Archives.",
};

export default function ContributePage() {
  return (
    <main>
      <section className="page-hero shell">
        <div className="eyebrow">
          For Photographers &amp; Artists
        </div>

        <h1>
          Create for
          <br />
          the Archive.
        </h1>

        <p>
          Figure Archives works with photographers and artists
          who understand that reference photography has a
          different purpose: it must be beautiful, but it must
          also be useful.
        </p>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div className="eyebrow">
            Contributing Artists
          </div>

          <div>
            <h2>
              Photography with
              a reason to exist.
            </h2>

            <p className="muted">
              We are interested in carefully produced studies
              of gesture, anatomy, movement, perspective,
              proportion, and light.
            </p>
          </div>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">I</div>
            <h3>Propose</h3>
            <p>
              Begin with a clear study concept rather than
              simply submitting a folder of photographs.
            </p>
          </div>

          <div className="step">
            <div className="step-num">II</div>
            <h3>Produce</h3>
            <p>
              Photograph the figure consistently, intentionally,
              and according to Archive production standards.
            </p>
          </div>

          <div className="step">
            <div className="step-num">III</div>
            <h3>Archive</h3>
            <p>
              Selected work is organized, catalogued, licensed,
              and presented as a permanent Figure Archives study.
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell">
          <div className="eyebrow">
            What we are looking for
          </div>

          <blockquote>
            Beauty matters.
            <br />
            Utility matters more.
          </blockquote>

          <p className="sub">
            The strongest Figure Archives collections give
            artists information they could not get from a
            single beautiful photograph.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="figure-standards">
          <div>
            <div className="eyebrow">
              Submission Principles
            </div>

            <h2>
              Build a study,
              not a gallery.
            </h2>
          </div>

          <div className="standards-list">
            <div>
              <span>Concept</span>
              <strong>A clearly defined artistic study</strong>
            </div>

            <div>
              <span>Poses</span>
              <strong>Intentional and useful for artists</strong>
            </div>

            <div>
              <span>Angles</span>
              <strong>Consistent where appropriate</strong>
            </div>

            <div>
              <span>Lighting</span>
              <strong>Designed to reveal form</strong>
            </div>

            <div>
              <span>Rights</span>
              <strong>Fully documented</strong>
            </div>

            <div>
              <span>Quality</span>
              <strong>Professional high-resolution files</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="creator-cta">
        <div className="shell creator-cta-inner">
          <div>
            <div className="eyebrow">
              Founding Contributors
            </div>

            <h2>
              Have a study
              worth preserving?
            </h2>
          </div>

          <div>
            <p>
              We are developing the first collection of
              contributing artists for Figure Archives.
            </p>

            <a
              className="btn dark"
              href="mailto:hello@figurearchives.com"
            >
              Introduce Your Work
            </a>

            <Link className="linkline" href="/licensing">
              Review Archive licensing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

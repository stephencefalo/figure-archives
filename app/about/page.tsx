import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Figure Archives is a curated photographic reference archive created for painters, illustrators, sculptors, and students of the human form.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero shell">
        <div className="eyebrow">
          About Figure Archives
        </div>

        <h1>
          Built for
          <br />
          the act of looking.
        </h1>

        <p>
          Figure Archives is a curated photographic
          reference library dedicated to the continued
          study of the human form.
        </p>
      </section>

      <section className="about-manifesto">
        <div className="shell">
          <div className="eyebrow">
            Our Purpose
          </div>

          <p>
            Not stock photography.
            <br />
            Not photographs to scroll past.
            <br />
            Studies to work from.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="about-story">
          <div>
            <div className="eyebrow">
              The Archive
            </div>

            <h2>
              A modern resource
              built on an ancient
              artistic practice.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Artists have studied the human figure for
              centuries — through life drawing, sculpture,
              anatomy, painting, and photography.
            </p>

            <p>
              Figure Archives brings that practice into a
              contemporary digital library: carefully produced
              photographic studies organized around pose,
              gesture, perspective, movement, and light.
            </p>

            <p>
              Each study is intended to provide more than a
              beautiful image. It should provide information
              an artist can return to, examine, interpret,
              and transform into something new.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="shell">
          <div className="eyebrow">
            Archive Principles
          </div>

          <div className="about-principle-grid">
            <article>
              <span>01</span>
              <h3>Useful</h3>
              <p>
                Every study should help an artist understand
                something about form.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Intentional</h3>
              <p>
                Photography, posing, lighting, and perspective
                exist in service of the study.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Respectful</h3>
              <p>
                The people who create the Archive are
                collaborators, not anonymous source material.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Enduring</h3>
              <p>
                The Archive is designed as a resource artists
                can return to throughout their practice.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-end">
        <div className="shell">
          <div>
            <div className="eyebrow">
              Begin
            </div>

            <h2>
              Find a figure.
              <br />
              Make something.
            </h2>
          </div>

          <div className="about-end-actions">
            <Link href="/archive" className="btn dark">
              Explore the Archive
            </Link>

            <Link
              href="/become-a-figure"
              className="linkline"
            >
              Become part of the Archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

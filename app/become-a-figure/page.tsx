import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Figure",
  description:
    "Collaborate with Figure Archives to create thoughtfully produced photographic reference studies for artists.",
};

export default function BecomeAFigurePage() {
  return (
    <main>
      <section className="contributor-hero shell">
        <div className="eyebrow">
          Become Part of the Archive
        </div>

        <h1>
          Become
          <br />
          a Figure.
        </h1>

        <div className="contributor-hero-copy">
          <p>
            Collaborate in the creation of photographic studies
            designed to become reference material for painters,
            illustrators, sculptors, and students of the human form.
          </p>

          <a className="btn dark" href="#apply">
            Express Interest
          </a>
        </div>
      </section>

      <section className="contributor-statement">
        <div className="shell">
          <div className="eyebrow">
            More than a subject
          </div>

          <p>
            The figure is not simply photographed.
            <br />
            The figure is part of the work.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div className="eyebrow">
            The Experience
          </div>

          <div>
            <h2>
              Thoughtful.
              <br />
              Professional.
              <br />
              Collaborative.
            </h2>

            <p className="muted">
              Every Figure Archives session is intended to be
              clearly communicated, professionally produced,
              and respectful of everyone involved.
            </p>
          </div>
        </div>

        <div className="experience-grid">
          <article>
            <span>01</span>
            <h3>Know the Concept</h3>
            <p>
              Before a session, you&apos;ll know the artistic
              direction, intended use, photographer, location,
              approximate session length, and agreed level of
              coverage.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Know Your Rights</h3>
            <p>
              Usage permissions, compensation, publication,
              licensing, and image rights are documented before
              photography begins.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Professional Environment</h3>
            <p>
              Sessions are designed around privacy, comfort,
              clear boundaries, secure handling of images,
              and professional studio practices.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Participate in the Value</h3>
            <p>
              Figure Archives is being designed so the people
              who help create valuable studies can participate
              transparently in the value those studies generate.
            </p>
          </article>
        </div>
      </section>

      <section className="figure-process">
        <div className="shell">
          <div className="eyebrow">
            From Session to Archive
          </div>

          <div className="figure-process-grid">
            <div>
              <strong>01</strong>
              <span>Conversation</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Concept &amp; Agreement</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Studio Session</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Selection &amp; Curation</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Enter the Archive</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="figure-standards">
          <div>
            <div className="eyebrow">
              Archive Standards
            </div>

            <h2>
              Clear expectations
              before the camera
              comes out.
            </h2>
          </div>

          <div className="standards-list">
            <div>
              <span>Age</span>
              <strong>Verified 18+ only</strong>
            </div>

            <div>
              <span>Participation</span>
              <strong>Voluntary and agreed in advance</strong>
            </div>

            <div>
              <span>Usage</span>
              <strong>Documented before publication</strong>
            </div>

            <div>
              <span>Compensation</span>
              <strong>Defined before the session</strong>
            </div>

            <div>
              <span>Privacy</span>
              <strong>Professional studio standards</strong>
            </div>

            <div>
              <span>Images</span>
              <strong>Controlled archival handling</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="figure-apply">
        <div className="shell figure-apply-grid">
          <div>
            <div className="eyebrow">
              Figure Interest Form
            </div>

            <h2>
              Interested in
              becoming part
              of the Archive?
            </h2>

            <p>
              Tell us a little about yourself. Submitting
              interest does not commit you to participating
              in a session.
            </p>
          </div>

          <form className="figure-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" />
            </label>

            <label>
              <span>Location</span>
              <input
                type="text"
                name="location"
                placeholder="City, State"
              />
            </label>

            <label>
              <span>Portfolio or Social</span>
              <input
                type="text"
                name="portfolio"
                placeholder="Optional"
              />
            </label>

            <label className="full">
              <span>Tell us about your interest</span>
              <textarea
                name="message"
                rows={5}
              />
            </label>

            <label className="age-confirm full">
              <input type="checkbox" name="age" />
              <span>
                I confirm that I am 18 years of age or older.
              </span>
            </label>

            <div className="full">
              <button className="btn dark" type="submit">
                Submit Interest
              </button>

              <p className="form-note">
                V1 preview — form submission will be activated
                before public recruitment begins.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

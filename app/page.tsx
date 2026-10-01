import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="fa-home-hero">
        <div className="fa-home-hero-image" />
        <div className="fa-home-hero-shade" />

        <div className="fa-home-hero-content">
          <div className="fa-home-hero-kicker">
            FIGURE ARCHIVES · CHARLESTON
          </div>

          <h1>
            The human form.
            <br />
            Made for artists.
          </h1>

          <p>
            Curated photographic figure studies created for
            painters, illustrators, sculptors, and students
            of the figure.
          </p>

          <div className="fa-home-hero-actions">
            <Link
              className="fa-hero-button"
              href="/archive"
            >
              Explore the Archive
            </Link>

            <Link
              className="fa-hero-link"
              href="/about"
            >
              Our Philosophy →
            </Link>
          </div>
        </div>

        <div className="fa-home-hero-record">
          <span>FIGURE ARCHIVES</span>
          <span>THE HUMAN FORM · 2026</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section shell">
        <div className="section-head">
          <div className="eyebrow">
            A reference archive for artists
          </div>

          <div>
            <h2>
              Look longer.
              <br />
              See more.
            </h2>

            <p className="muted">
              Figure Archives is a curated library of
              photographic studies built around the way
              figurative artists actually work — gesture,
              proportion, light, anatomy, and form.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING ARCHIVE */}
      <section className="fa-founding shell">
        <div className="fa-founding-visual">
          <div className="fa-founding-art">
            <span className="fa-founding-number">
              FA 0001
            </span>

            <span className="fa-founding-status">
              FOUNDING ARCHIVE · IN DEVELOPMENT
            </span>
          </div>
        </div>

        <div className="fa-founding-copy">
          <div className="eyebrow">
            The Founding Archive
          </div>

          <h2>
            The Figure —
            <br />
            Volume I
          </h2>

          <p>
            A photographic study of the human figure,
            documented for artists through carefully
            considered poses, consistent viewpoints,
            and controlled light.
          </p>

          <div className="fa-founding-meta">
            <div>
              <span>Photography</span>
              <strong>Stephen Cefalo</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Charleston</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>Coming Soon</strong>
            </div>
          </div>

          <Link
            className="linkline"
            href="/collection/fa-0001-the-figure-volume-i"
          >
            Preview the Founding Archive →
          </Link>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="shell">
          <div className="eyebrow">
            Our purpose
          </div>

          <blockquote>
            Not photographs to consume.
            References to study, interpret,
            and transform.
          </blockquote>

          <p className="sub">
            Figure Archives preserves the discipline of
            drawing from life while extending access beyond
            the studio. Every collection exists to become
            something new in an artist&apos;s hands.
          </p>
        </div>
      </section>

      {/* METHOD */}
      <section className="section shell">
        <div className="section-head">
          <div className="eyebrow">
            The method
          </div>

          <div>
            <h2>
              Built around how
              <br />
              artists actually see.
            </h2>

            <p className="muted">
              A reference photograph captures a moment.
              A Figure Archives study is designed to help
              you understand the form.
            </p>
          </div>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">I</div>

            <h3>Curated Poses</h3>

            <p>
              Sessions are art-directed around gesture,
              proportion, silhouette, anatomy, and practical
              usefulness in the studio.
            </p>
          </div>

          <div className="step">
            <div className="step-num">II</div>

            <h3>Multiple Perspectives</h3>

            <p>
              Principal poses are documented from consistent
              viewpoints so artists can understand the figure
              as three-dimensional form.
            </p>
          </div>

          <div className="step">
            <div className="step-num">III</div>

            <h3>Create Freely</h3>

            <p>
              Study the reference. Draw it. Paint it.
              Sculpt it. Then exhibit and sell the original
              artwork you create.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="fa-final-statement">
        <div className="shell">
          <div className="eyebrow">
            Figure Archives
          </div>

          <h2>
            Observation
            <br />
            becomes art.
          </h2>

          <Link
            className="linkline"
            href="/about"
          >
            Discover our philosophy →
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section shell">
        <div className="newsletter">
          <div>
            <div className="eyebrow">
              From the Archive
            </div>

            <h2>
              A reason to draw
              <br />
              every week.
            </h2>
          </div>

          <div>
            <p className="serif muted">
              Receive selected reference studies, new
              collection notices, and occasional notes
              from Figure Archives.
            </p>

            <form>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
              />

              <button type="submit">
                Enter Archive →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

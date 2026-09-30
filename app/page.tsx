import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            A digital institution for figurative artists
          </div>

          <h1>
            The human form.
            <br />
            Made for artists.
          </h1>

          <p>
            Curated photographic reference studies created for painters,
            illustrators, sculptors, and students of the figure.
          </p>

          <div className="hero-actions">
            <Link className="btn dark" href="/archive">
              Explore the Archive
            </Link>

            <Link className="btn" href="/about">
              Our Philosophy
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <span className="art-caption">
            Founding Collection · Charleston · 2026
          </span>
        </div>
      </section>

      {/* RECENT STUDIES */}
      <section className="section shell">

        <div className="section-head">
          <div className="eyebrow">
            Recently entered into the Archive
          </div>

          <div>
            <h2>
              Studies for
              <br />
              looking longer.
            </h2>

            <p className="muted">
              Each study is a structured working folio: carefully lit,
              consistently photographed, and licensed for the creation of
              original artwork.
            </p>
          </div>
        </div>

        <div className="study-grid">

          <article className="study-card">
            <div className="image">
              <span className="art-caption">FA 0001</span>
            </div>

            <div className="study-meta">
              <div>
                <div className="study-small">
                  FA 0001 · Classical Figure
                </div>

                <h3 className="study-title">
                  Reclining Figure I
                </h3>

                <div className="study-small">
                  Stephen Cefalo
                </div>
              </div>

              <div className="study-small">$32</div>
            </div>
          </article>

          <article className="study-card">
            <div className="image">
              <span className="art-caption">FA 0002</span>
            </div>

            <div className="study-meta">
              <div>
                <div className="study-small">
                  FA 0002 · Gesture
                </div>

                <h3 className="study-title">
                  Gesture &amp; Movement I
                </h3>

                <div className="study-small">
                  Stephen Cefalo
                </div>
              </div>

              <div className="study-small">$28</div>
            </div>
          </article>

          <article className="study-card">
            <div className="image">
              <span className="art-caption">FA 0003</span>
            </div>

            <div className="study-meta">
              <div>
                <div className="study-small">
                  FA 0003 · Light &amp; Shadow
                </div>

                <h3 className="study-title">
                  Light &amp; Shadow I
                </h3>

                <div className="study-small">
                  Stephen Cefalo
                </div>
              </div>

              <div className="study-small">$34</div>
            </div>
          </article>

        </div>

        <div style={{ marginTop: "45px" }}>
          <Link className="linkline" href="/archive">
            View the complete archive →
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
            Figure Archives preserves the discipline of drawing from life
            while extending access beyond the studio. Every collection exists
            to become something new in an artist&apos;s hands.
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section shell">

        <div className="section-head">
          <div className="eyebrow">
            The method
          </div>

          <div>
            <h2>
              Built around how
              <br />
              artists actually work.
            </h2>
          </div>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-num">I</div>

            <h3>Curated Studies</h3>

            <p>
              Every session is art-directed and selected for gesture,
              proportion, light, and practical usefulness.
            </p>
          </div>

          <div className="step">
            <div className="step-num">II</div>

            <h3>Multiple Perspectives</h3>

            <p>
              Principal poses are documented from consistent angles so artists
              can understand the figure in space.
            </p>
          </div>

          <div className="step">
            <div className="step-num">III</div>

            <h3>Create Freely</h3>

            <p>
              Acquire a study, create original artwork from it, exhibit that
              work, and sell what you make.
            </p>
          </div>

        </div>
      </section>

      {/* STUDY OF THE WEEK */}
      <section className="section shell">

        <div className="newsletter">

          <div>
            <div className="eyebrow">
              Study of the Week
            </div>

            <h2>
              A reason to draw
              every week.
            </h2>
          </div>

          <div>
            <p className="serif muted">
              Receive one selected reference study, new collection notices,
              and occasional notes from the Archive.
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

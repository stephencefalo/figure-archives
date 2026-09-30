import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Archive",
  description:
    "Your personal collection of Figure Archives reference studies.",
};

export default function MyArchivePage() {
  return (
    <main>
      <section className="account-hero shell">
        <div>
          <div className="eyebrow">Private Collection</div>

          <h1>My Archive</h1>

          <p>
            Your acquired studies, saved references,
            and working collections — preserved in one place.
          </p>
        </div>

        <div className="account-status">
          <span>Archive Status</span>
          <strong>Guest</strong>
        </div>
      </section>

      <section className="my-archive shell">
        <div className="archive-sidebar">
          <div className="eyebrow">Collection</div>

          <nav>
            <span className="active">Acquired Studies</span>
            <span>Saved References</span>
            <span>Recent Studies</span>
          </nav>
        </div>

        <div className="archive-library">
          <div className="library-heading">
            <div>
              <div className="eyebrow">Acquired Studies</div>

              <h2>Your working library.</h2>
            </div>

            <span className="library-count">0 Studies</span>
          </div>

          <div className="empty-archive">
            <div className="empty-mark">FA</div>

            <h3>Your Archive is waiting.</h3>

            <p>
              Studies you acquire will live here permanently,
              giving you one place to return to your reference
              library whenever you are ready to work.
            </p>

            <Link href="/archive" className="btn dark">
              Explore the Archive
            </Link>
          </div>
        </div>
      </section>

      <section className="archive-benefits">
        <div className="shell">
          <div className="eyebrow">Your Archive</div>

          <div className="benefit-grid">
            <div>
              <span>01</span>
              <h3>Permanent Access</h3>
              <p>
                Return to acquired studies from your personal
                library without searching for old downloads.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Working Collections</h3>
              <p>
                Keep reference material organized around the
                artwork and ideas you are developing.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Studio Mode</h3>
              <p>
                A distraction-free reference environment is
                planned for the evolving Figure Archives platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

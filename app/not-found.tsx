import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="shell not-found-inner">

        <div className="eyebrow">
          Figure Archives · 404
        </div>

        <div className="not-found-number">
          404
        </div>

        <h1>
          This study could
          <br />
          not be found.
        </h1>

        <p>
          The page may have moved, or the
          requested record may not yet exist
          in the Archive.
        </p>

        <div className="not-found-actions">
          <Link
            href="/archive"
            className="btn dark"
          >
            Return to the Archive
          </Link>

          <Link
            href="/"
            className="linkline"
          >
            Figure Archives Home
          </Link>
        </div>

      </div>
    </main>
  );
}

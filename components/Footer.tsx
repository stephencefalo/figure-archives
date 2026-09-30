import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">

        <div className="footer-grid">

          <div>
            <h3>FIGURE ARCHIVES</h3>

            <p className="muted serif">
              The human form. Made for artists.
            </p>
          </div>

          <div>
            <span className="eyebrow">
              Explore
            </span>

            <Link href="/archive">
              The Archive
            </Link>

            <Link href="/artists">
              Artists
            </Link>

            <Link href="/journal">
              Journal
            </Link>

            <Link href="/licensing">
              Licensing
            </Link>
          </div>

          <div>
            <span className="eyebrow">
              Contribute
            </span>

            <Link href="/become-a-figure">
              Become a Figure
            </Link>

            <Link href="/contribute">
              Contribute Photography
            </Link>

            <Link href="/about">
              About
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Figure Archives
          </span>

          <span>
            FigureArchives.com · Charleston
          </span>
        </div>

      </div>
    </footer>
  );
}

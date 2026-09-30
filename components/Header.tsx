import Link from "next/link";

export function Header() {
  return (
    <header className="header shell">
      <button
        className="menu"
        aria-label="Open navigation"
        type="button"
      >
        ☰
      </button>

      <nav aria-label="Primary navigation">
        <Link href="/archive">Archive</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/about">About</Link>
      </nav>

      <Link className="wordmark" href="/">
        FIGURE ARCHIVES
      </Link>

      <div className="right">
        <Link className="hide-mobile" href="/licensing">
          Licensing
        </Link>

        <Link href="/my-archive">
          My Archive
        </Link>
      </div>
    </header>
  );
}

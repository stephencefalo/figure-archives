"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/archive", label: "The Archive" },
  { href: "/artists", label: "Artists" },
  { href: "/become-a-figure", label: "Become a Figure" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Link
            href="/"
            className="wordmark"
            aria-label="Figure Archives home"
          >
            <span className="wordmark-main">
              FIGURE ARCHIVES
            </span>

            <span className="wordmark-sub">
              The Human Form. Made for Artists.
            </span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link
              href="/my-archive"
              className="my-archive-link"
            >
              My Archive
            </Link>

            <button
              className="menu-button"
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          menuOpen
            ? "mobile-menu open"
            : "mobile-menu"
        }
        aria-hidden={!menuOpen}
      >
        <div className="shell mobile-menu-inner">
          <div className="mobile-menu-label">
            <span>Navigation</span>
            <span>Figure Archives · 2026</span>
          </div>

          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}

            <Link href="/contribute">
              <span className="mobile-nav-number">
                05
              </span>

              <span>Contribute</span>
            </Link>
          </nav>

          <div className="mobile-menu-bottom">
            <Link href="/my-archive">
              My Archive →
            </Link>

            <Link href="/licensing">
              Artist Reference License
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

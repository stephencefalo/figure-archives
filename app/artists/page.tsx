import Link from "next/link";
import type { Metadata } from "next";

import { artists } from "@/lib/artists";

export const metadata: Metadata = {
  title: "Contributing Artists",
  description:
    "Meet the photographers and artists creating original figure studies for Figure Archives.",
};

export default function ArtistsPage() {
  return (
    <main>
      <section className="page-hero shell">
        <div className="eyebrow">
          The People Behind the Archive
        </div>

        <h1>
          Contributing
          <br />
          Artists
        </h1>

        <p>
          Figure Archives is built through collaboration with
          artists and photographers who approach the human form
          with intention, curiosity, and respect.
        </p>
      </section>

      <section className="artist-directory shell">
        <div className="directory-heading">
          <div className="eyebrow">
            Archive Registry
          </div>

          <span>
            {String(artists.length).padStart(2, "0")}{" "}
            {artists.length === 1 ? "Artist" : "Artists"}
          </span>
        </div>

        {artists.map((artist) => (
          <Link
            href={`/artists/${artist.slug}`}
            className="artist-row"
            key={artist.archiveId}
          >
            <div className="artist-number">
              {artist.archiveId}
            </div>

            <div className="artist-portrait">
              <span>
                {artist.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </span>
            </div>

            <div className="artist-name">
              <h2>{artist.name}</h2>

              <span>{artist.role}</span>
            </div>

            <div className="artist-location">
              {artist.location}
            </div>

            <div className="artist-arrow">
              →
            </div>
          </Link>
        ))}
      </section>

      <section className="artist-directory-footer">
        <div className="shell">
          <div>
            <div className="eyebrow">
              Contribute
            </div>

            <h2>
              The Archive is
              still being written.
            </h2>
          </div>

          <div>
            <p>
              Figure Archives welcomes proposals from
              photographers and artists interested in creating
              thoughtful photographic studies of the human form.
            </p>

            <Link href="/contribute" className="btn dark">
              Create for the Archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

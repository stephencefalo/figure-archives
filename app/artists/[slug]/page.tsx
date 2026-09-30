import Link from "next/link";
import { notFound } from "next/navigation";

import {
  artists,
  getArtist,
} from "@/lib/artists";

import { studies } from "@/lib/data";
import { StudyCard } from "@/components/StudyCard";

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artist = getArtist(slug);

  if (!artist) {
    notFound();
  }

  const artistStudies = studies.filter(
    (study) => study.artist === artist.name
  );

  return (
    <main>
      <section className="artist-profile-hero shell">
        <div className="artist-profile-index">
          <span>{artist.archiveId}</span>

          <span>
            Archive Contributor Since {artist.since}
          </span>
        </div>

        <div className="artist-profile-grid">
          <div className="artist-profile-image">
            <div className="artist-initials">
              {artist.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>

            <span className="art-caption">
              {artist.archiveId}
            </span>
          </div>

          <div className="artist-profile-copy">
            <div className="eyebrow">
              {artist.role}
            </div>

            <h1>{artist.name}</h1>

            <div className="artist-profile-meta">
              <div>
                <span>Based</span>
                <strong>{artist.location}</strong>
              </div>

              <div>
                <span>Archive Studies</span>
                <strong>{artistStudies.length}</strong>
              </div>

              <div>
                <span>Contributor Since</span>
                <strong>{artist.since}</strong>
              </div>
            </div>

            <p className="artist-biography">
              {artist.biography}
            </p>
          </div>
        </div>
      </section>

      <section className="artist-quote">
        <div className="shell">
          <div className="eyebrow">
            Artist Statement
          </div>

          <blockquote>
            “{artist.statement}”
          </blockquote>

          <div className="quote-credit">
            — {artist.name}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div className="eyebrow">
            Archive Contributions
          </div>

          <div>
            <h2>
              Studies by
              <br />
              {artist.name}
            </h2>

            <p className="muted">
              Photographic studies produced as working
              reference for artists.
            </p>
          </div>
        </div>

        {artistStudies.length > 0 ? (
          <div className="study-grid">
            {artistStudies.map((study) => (
              <StudyCard
                key={study.id}
                study={study}
              />
            ))}
          </div>
        ) : (
          <div className="artist-empty">
            No studies have entered the Archive yet.
          </div>
        )}
      </section>

      <section className="artist-next">
        <div className="shell artist-next-inner">
          <div>
            <div className="eyebrow">
              Continue Exploring
            </div>

            <h2>
              Follow the work
              into the Archive.
            </h2>
          </div>

          <Link href="/archive" className="btn dark">
            Explore the Archive
          </Link>
        </div>
      </section>
    </main>
  );
}

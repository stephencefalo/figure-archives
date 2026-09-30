import type { Metadata } from "next";

import { studies } from "@/lib/data";
import { StudyCard } from "@/components/StudyCard";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Explore curated photographic figure studies created as working reference for artists.",
};

export default function ArchivePage() {
  return (
    <main>

      <section className="page-hero shell">
        <div className="eyebrow">
          The Archive · 2026
        </div>

        <h1>
          Figure Studies
        </h1>

        <p>
          Curated photographic reference organized as
          working folios for the serious study of form,
          gesture, light, and movement.
        </p>
      </section>

      <div className="shell filters">

        <button className="pill active">
          All Studies
        </button>

        <button className="pill">
          Classical Figure
        </button>

        <button className="pill">
          Gesture
        </button>

        <button className="pill">
          Multi-Angle
        </button>

        <button className="pill">
          Light &amp; Shadow
        </button>

        <button className="pill">
          Natural Light
        </button>

      </div>

      <section className="section shell">

        <div className="study-grid">
          {studies.map((study) => (
            <StudyCard
              key={study.id}
              study={study}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

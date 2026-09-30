import type { Metadata } from "next";

import { studies } from "@/lib/data";
import { ArchiveBrowser } from "@/components/ArchiveBrowser";

export const metadata: Metadata = {
  title: "The Archive",

  description:
    "Explore curated photographic figure studies created as working reference for painters, illustrators, sculptors, and students.",
};

export default function ArchivePage() {
  return (
    <main>
      <section className="page-hero shell">
        <div className="eyebrow">
          The Archive · 2026
        </div>

        <h1>
          Figure
          <br />
          Studies
        </h1>

        <p>
          Curated photographic reference organized
          as working folios for the serious study
          of form, gesture, light, movement, and
          perspective.
        </p>
      </section>

      <ArchiveBrowser studies={studies} />
    </main>
  );
}

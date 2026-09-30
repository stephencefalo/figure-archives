"use client";

import { useMemo, useState } from "react";

import type { Study } from "@/lib/data";
import { StudyCard } from "@/components/StudyCard";

const categories = [
  "All Studies",
  "Classical Figure",
  "Gesture",
  "Multi-Angle",
  "Light & Shadow",
];

export function ArchiveBrowser({
  studies,
}: {
  studies: Study[];
}) {
  const [activeCategory, setActiveCategory] =
    useState("All Studies");

  const [search, setSearch] = useState("");

  const filteredStudies = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return studies.filter((study) => {
      const categoryMatch =
        activeCategory === "All Studies" ||
        study.category === activeCategory;

      const searchMatch =
        !query ||
        study.title.toLowerCase().includes(query) ||
        study.artist.toLowerCase().includes(query) ||
        study.category.toLowerCase().includes(query) ||
        study.lighting.toLowerCase().includes(query) ||
        study.id.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search, studies]);

  function clearFilters() {
    setActiveCategory("All Studies");
    setSearch("");
  }

  return (
    <>
      <section className="archive-tools shell">
        <div
          className="filters"
          aria-label="Filter studies"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "pill active"
                  : "pill"
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="archive-search">
          <label htmlFor="archive-search">
            Search the Archive
          </label>

          <div className="archive-search-field">
            <input
              id="archive-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Title, artist, light, archive number…"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="archive-results shell">
        <div className="archive-result-heading">
          <span>
            {filteredStudies.length}{" "}
            {filteredStudies.length === 1
              ? "Study"
              : "Studies"}
          </span>

          {activeCategory !== "All Studies" && (
            <span>
              {activeCategory}
            </span>
          )}
        </div>

        {filteredStudies.length > 0 ? (
          <div className="study-grid">
            {filteredStudies.map((study) => (
              <StudyCard
                key={study.id}
                study={study}
              />
            ))}
          </div>
        ) : (
          <div className="archive-empty">
            <div className="archive-empty-mark">
              FA
            </div>

            <h2>
              No studies found.
            </h2>

            <p>
              Try another search or return to
              the complete Archive.
            </p>

            <button
              className="btn"
              type="button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}

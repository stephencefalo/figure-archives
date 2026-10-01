"use client";

import { useState } from "react";

import type { StudyView } from "@/lib/data";
import { StudyImage } from "@/components/StudyImage";

type StudyViewerProps = {
  studyId: string;
  title: string;
  views: StudyView[];
};

export function StudyViewer({
  studyId,
  title,
  views,
}: StudyViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (views.length === 0) {
    return (
      <div className="viewer-empty">
        <span className="eyebrow">Study Preview</span>
        <p>
          Preview images for this study have not entered
          the Archive yet.
        </p>
      </div>
    );
  }

  const activeView = views[activeIndex];

  function previousView() {
    setActiveIndex((current) =>
      current === 0 ? views.length - 1 : current - 1
    );
  }

  function nextView() {
    setActiveIndex((current) =>
      current === views.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="study-viewer">
      <div className="viewer-topline">
        <div>
          <span className="eyebrow">Study Viewer</span>
          <span className="viewer-pose">Pose 01</span>
        </div>

        <span className="viewer-count">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(views.length).padStart(2, "0")}
        </span>
      </div>

      <div
        className={
          activeView.locked
            ? "viewer-stage viewer-stage-locked"
            : "viewer-stage"
        }
      >
        {activeView.locked ? (
          <>
            <div className="locked-reference-background">
              <span className="locked-reference-id">
                {activeView.id}
              </span>

              <span className="locked-reference-mark">
                FA
              </span>
            </div>

            <div className="locked-reference-overlay">
              <span className="locked-reference-kicker">
                {activeView.code} · {activeView.angle}
              </span>

              <strong>Reference Locked</strong>

              <p>
                This perspective is included with the
                complete study.
              </p>

              <a
                href="#acquire-study"
                className="locked-reference-action"
              >
                Acquire Study →
              </a>
            </div>
          </>
        ) : (
          <StudyImage
            src={activeView.preview}
            alt={`${title} — ${activeView.angle}`}
            archiveId={activeView.id}
            className="viewer-main-image"
            priority
          />
        )}

        <button
          type="button"
          className="viewer-arrow viewer-arrow-left"
          onClick={previousView}
          aria-label="Previous perspective"
        >
          ←
        </button>

        <button
          type="button"
          className="viewer-arrow viewer-arrow-right"
          onClick={nextView}
          aria-label="Next perspective"
        >
          →
        </button>
      </div>

      <div
        className="viewer-thumbnails"
        aria-label="Study perspectives"
      >
        {views.map((view, index) => {
          const active = index === activeIndex;

          return (
            <button
              type="button"
              key={view.id}
              className={[
                "viewer-thumb",
                active ? "active" : "",
                view.locked ? "locked" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActiveIndex(index)}
              aria-label={`${view.code} ${view.angle}${
                view.locked ? " — locked" : ""
              }`}
            >
              <div className="viewer-thumb-image">
                {view.locked ? (
                  <div className="viewer-thumb-locked-art">
                    <span className="viewer-thumb-fa">
                      FA
                    </span>

                    <span className="viewer-thumb-lock">
                      LOCKED
                    </span>
                  </div>
                ) : (
                  <StudyImage
                    src={view.thumbnail ?? view.preview}
                    alt={`${title} — ${view.angle}`}
                    archiveId={view.id}
                  />
                )}
              </div>

              <div className="viewer-thumb-meta">
                <span>{view.code}</span>
                <span>{view.angle}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="viewer-axis">
        <span>Front</span>

        <div className="viewer-axis-line">
          {views.map((view, index) => (
            <button
              type="button"
              key={view.id}
              className={
                index === activeIndex
                  ? "viewer-axis-dot active"
                  : "viewer-axis-dot"
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`Select ${view.angle}`}
            />
          ))}
        </div>

        <span>Rear</span>
      </div>

      <div className="viewer-caption">
        <span>{activeView.id}</span>

        <p>
          {activeView.locked
            ? `${activeView.angle} perspective — available in the complete study.`
            : "Multiple viewpoints allow the figure to be understood as form in space, rather than as a single photograph."}
        </p>
      </div>
    </div>
  );
}

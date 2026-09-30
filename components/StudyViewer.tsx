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
        <span className="eyebrow">
          Study Preview
        </span>

        <p>
          Preview images for this study have not
          entered the Archive yet.
        </p>
      </div>
    );
  }

  const activeView = views[activeIndex];

  function previousView() {
    setActiveIndex((current) =>
      current === 0
        ? views.length - 1
        : current - 1
    );
  }

  function nextView() {
    setActiveIndex((current) =>
      current === views.length - 1
        ? 0
        : current + 1
    );
  }

  return (
    <div className="study-viewer">
      <div className="viewer-toolbar">
        <div>
          <span className="eyebrow">
            Study Viewer
          </span>

          <span className="viewer-pose">
            Pose {activeView.pose.replace("P", "")}
          </span>
        </div>

        <div className="viewer-count">
          {String(activeIndex + 1).padStart(2, "0")}
          {" / "}
          {String(views.length).padStart(2, "0")}
        </div>
      </div>

      <div className="viewer-stage">
        <StudyImage
          src={activeView.preview}
          alt={`${title} — ${activeView.angle}`}
          archiveId={activeView.id}
          className="viewer-main-image"
          priority
        />

        <button
          type="button"
          className="viewer-arrow viewer-arrow-left"
          onClick={previousView}
          aria-label="Previous view"
        >
          ←
        </button>

        <button
          type="button"
          className="viewer-arrow viewer-arrow-right"
          onClick={nextView}
          aria-label="Next view"
        >
          →
        </button>

        <div className="viewer-angle">
          {activeView.angle}
        </div>
      </div>

      <div className="viewer-thumbnails">
        {views.map((view, index) => (
          <button
            type="button"
            key={view.id}
            className={
              index === activeIndex
                ? "viewer-thumbnail active"
                : "viewer-thumbnail"
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${view.angle}`}
          >
            <StudyImage
              src={view.thumbnail ?? view.preview}
              alt={`${title} — ${view.angle}`}
              archiveId={view.view}
              className="viewer-thumbnail-image"
            />

            <span className="viewer-thumbnail-label">
              <span>{view.view}</span>
              <span>{view.angle}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="viewer-sequence">
        <span>
          Front
        </span>

        <div className="viewer-sequence-line">
          {views.map((view, index) => (
            <button
              type="button"
              key={view.id}
              aria-label={`Select ${view.angle}`}
              className={
                index === activeIndex
                  ? "sequence-point active"
                  : "sequence-point"
              }
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <span>
          Rear
        </span>
      </div>

      <div className="viewer-note">
        <span>{studyId}</span>

        <p>
          Multiple viewpoints allow the figure
          to be understood as form in space,
          rather than as a single photograph.
        </p>
      </div>
    </div>
  );
}

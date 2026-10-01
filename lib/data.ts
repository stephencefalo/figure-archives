export type StudyView = {
  id: string;
  code: string;
  pose: string;
  view: string;
  angle: string;
  preview: string | null;
  thumbnail: string | null;
};

export type Pose = {
  id: string;
  code: string;
  title: string;
  views: StudyView[];
};

export type ArchiveStudy = {
  id: string;
  code: string;
  title: string;
  description: string;
  price: number;
  cover: string | null;
  poses: Pose[];
};

export type Collection = {
  slug: string;
  id: string;
  title: string;
  artist: string;
  artistSlug: string;
  location: string;
  year: number;
  lighting: string;
  category: string;
  description: string;
  cover: string | null;
  collectionPrice: number;
  studies: ArchiveStudy[];
};

/*
  NEW FIGURE ARCHIVES ARCHITECTURE

  Collection
    → Study
      → Pose
        → View

  Example:
  FA 0001 / S01 / P01 / V01
*/

function createFiveViews(
  collectionId: string,
  studyCode: string,
  poseCode: string
): StudyView[] {
  const angles = [
    "Front",
    "¾ Front",
    "Profile",
    "¾ Rear",
    "Rear",
  ];

  return angles.map((angle, index) => {
    const viewCode = `V${String(index + 1).padStart(2, "0")}`;

    return {
      id: `${collectionId} / ${studyCode} / ${poseCode} / ${viewCode}`,
      code: viewCode,
      pose: poseCode,
      view: viewCode,
      angle,
      preview: null,
      thumbnail: null,
    };
  });
}

export const collections: Collection[] = [
  {
    slug: "fa-0001-the-figure-volume-i",
    id: "FA 0001",
    title: "The Figure — Volume I",
    artist: "Stephen Cefalo",
    artistSlug: "stephen-cefalo",
    location: "Charleston, South Carolina",
    year: 2026,
    lighting: "Natural / Directional",
    category: "Classical Figure",
    description:
      "A foundational collection devoted to proportion, gesture, weight, movement, and the figure in space. Organized as working studies rather than isolated photographs.",
    cover: null,
    collectionPrice: 49,
    studies: [
      {
        id: "FA 0001 / S01",
        code: "S01",
        title: "Reclining Figure",
        description:
          "Three reclining poses documented from consistent viewpoints for the study of weight, proportion, foreshortening, and form.",
        price: 18,
        cover: null,
        poses: [
          {
            id: "FA 0001 / S01 / P01",
            code: "P01",
            title: "Extended",
            views: createFiveViews("FA 0001", "S01", "P01"),
          },
          {
            id: "FA 0001 / S01 / P02",
            code: "P02",
            title: "Bent Knee",
            views: createFiveViews("FA 0001", "S01", "P02"),
          },
          {
            id: "FA 0001 / S01 / P03",
            code: "P03",
            title: "Foreshortened",
            views: createFiveViews("FA 0001", "S01", "P03"),
          },
        ],
      },
      {
        id: "FA 0001 / S02",
        code: "S02",
        title: "Seated Figure",
        description:
          "Three seated poses exploring posture, compression, torso direction, and changes in weight.",
        price: 18,
        cover: null,
        poses: [
          {
            id: "FA 0001 / S02 / P01",
            code: "P01",
            title: "Upright",
            views: createFiveViews("FA 0001", "S02", "P01"),
          },
          {
            id: "FA 0001 / S02 / P02",
            code: "P02",
            title: "Forward Lean",
            views: createFiveViews("FA 0001", "S02", "P02"),
          },
          {
            id: "FA 0001 / S02 / P03",
            code: "P03",
            title: "Twisted Torso",
            views: createFiveViews("FA 0001", "S02", "P03"),
          },
        ],
      },
      {
        id: "FA 0001 / S03",
        code: "S03",
        title: "Standing Figure",
        description:
          "Three standing poses emphasizing balance, weight distribution, gesture, and silhouette.",
        price: 18,
        cover: null,
        poses: [
          {
            id: "FA 0001 / S03 / P01",
            code: "P01",
            title: "Contrapposto",
            views: createFiveViews("FA 0001", "S03", "P01"),
          },
          {
            id: "FA 0001 / S03 / P02",
            code: "P02",
            title: "Weight Shift",
            views: createFiveViews("FA 0001", "S03", "P02"),
          },
          {
            id: "FA 0001 / S03 / P03",
            code: "P03",
            title: "Extended Arm",
            views: createFiveViews("FA 0001", "S03", "P03"),
          },
        ],
      },
      {
        id: "FA 0001 / S04",
        code: "S04",
        title: "Gesture & Movement",
        description:
          "A sequence emphasizing rhythm, movement, asymmetry, and expressive gesture.",
        price: 18,
        cover: null,
        poses: [
          {
            id: "FA 0001 / S04 / P01",
            code: "P01",
            title: "Gesture I",
            views: createFiveViews("FA 0001", "S04", "P01"),
          },
          {
            id: "FA 0001 / S04 / P02",
            code: "P02",
            title: "Gesture II",
            views: createFiveViews("FA 0001", "S04", "P02"),
          },
          {
            id: "FA 0001 / S04 / P03",
            code: "P03",
            title: "Gesture III",
            views: createFiveViews("FA 0001", "S04", "P03"),
          },
        ],
      },
    ],
  },
];

export function getCollection(slug: string) {
  return collections.find(
    (collection) => collection.slug === slug
  );
}

export function getArchiveStudy(
  collectionSlug: string,
  studyCode: string
) {
  const collection = getCollection(collectionSlug);

  return collection?.studies.find(
    (study) =>
      study.code.toLowerCase() === studyCode.toLowerCase()
  );
}

export function getCollectionReferenceCount(
  collection: Collection
) {
  return collection.studies.reduce(
    (collectionTotal, study) =>
      collectionTotal +
      study.poses.reduce(
        (studyTotal, pose) =>
          studyTotal + pose.views.length,
        0
      ),
    0
  );
}

export function getCollectionPoseCount(
  collection: Collection
) {
  return collection.studies.reduce(
    (total, study) => total + study.poses.length,
    0
  );
}

export function getStudyReferenceCount(
  study: ArchiveStudy
) {
  return study.poses.reduce(
    (total, pose) => total + pose.views.length,
    0
  );
}

/*
  TEMPORARY LEGACY COMPATIBILITY

  The existing live website still expects the older
  Study structure. We are keeping this section
  temporarily so FigureArchives.com continues to
  build while the pages are migrated to Collections.
*/

export type Study = {
  slug: string;
  id: string;
  title: string;
  artist: string;
  artistSlug: string;
  location: string;
  year: number;
  references: number;
  poses: number;
  perspectives: number;
  lighting: string;
  category: string;
  price: number;
  description: string;
  cover: string | null;
  views: StudyView[];
};

export const studies: Study[] = [
  {
    slug: "fa-0001-reclining-figure",
    id: "FA 0001",
    title: "Reclining Figure I",
    artist: "Stephen Cefalo",
    artistSlug: "stephen-cefalo",
    location: "Charleston, South Carolina",
    year: 2026,
    references: 46,
    poses: 8,
    perspectives: 5,
    lighting: "Natural / Directional",
    category: "Classical Figure",
    price: 32,
    description:
      "A quiet study of proportion, weight, gesture, and light. Structured as a working reference folio with multiple perspectives of each principal pose.",
    cover: null,
    views: createFiveViews(
      "FA 0001",
      "S01",
      "P01"
    ),
  },
  {
    slug: "fa-0002-gesture-movement",
    id: "FA 0002",
    title: "Gesture & Movement I",
    artist: "Stephen Cefalo",
    artistSlug: "stephen-cefalo",
    location: "Charleston, South Carolina",
    year: 2026,
    references: 38,
    poses: 12,
    perspectives: 3,
    lighting: "Soft Studio",
    category: "Gesture",
    price: 28,
    description:
      "A sequence built for gesture practice, movement studies, and compositional exploration.",
    cover: null,
    views: [],
  },
  {
    slug: "fa-0003-light-shadow",
    id: "FA 0003",
    title: "Light & Shadow I",
    artist: "Stephen Cefalo",
    artistSlug: "stephen-cefalo",
    location: "Charleston, South Carolina",
    year: 2026,
    references: 42,
    poses: 7,
    perspectives: 5,
    lighting: "Chiaroscuro",
    category: "Light & Shadow",
    price: 34,
    description:
      "Directional light reveals form through value, edge, and shadow for painters and draftspeople.",
    cover: null,
    views: [],
  },
  {
    slug: "fa-0004-multi-angle",
    id: "FA 0004",
    title: "The Turning Figure I",
    artist: "Stephen Cefalo",
    artistSlug: "stephen-cefalo",
    location: "Charleston, South Carolina",
    year: 2026,
    references: 50,
    poses: 10,
    perspectives: 5,
    lighting: "Neutral Studio",
    category: "Multi-Angle",
    price: 36,
    description:
      "Ten held poses documented from five consistent viewpoints to help artists understand three-dimensional form.",
    cover: null,
    views: [],
  },
];

export function getStudy(slug: string) {
  return studies.find((study) => study.slug === slug);
}

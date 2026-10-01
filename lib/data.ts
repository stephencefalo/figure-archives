export type StudyView = {
  id: string;
  code: string;
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
  return collections.find((collection) => collection.slug === slug);
}

export function getStudy(collectionSlug: string, studyCode: string) {
  const collection = getCollection(collectionSlug);

  return collection?.studies.find(
    (study) => study.code.toLowerCase() === studyCode.toLowerCase()
  );
}

export function getCollectionReferenceCount(collection: Collection) {
  return collection.studies.reduce(
    (collectionTotal, study) =>
      collectionTotal +
      study.poses.reduce(
        (studyTotal, pose) => studyTotal + pose.views.length,
        0
      ),
    0
  );
}

export function getCollectionPoseCount(collection: Collection) {
  return collection.studies.reduce(
    (total, study) => total + study.poses.length,
    0
  );
}

export function getStudyReferenceCount(study: ArchiveStudy) {
  return study.poses.reduce(
    (total, pose) => total + pose.views.length,
    0
  );
}

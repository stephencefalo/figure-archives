export type StudyView = {
  id: string;
  pose: string;
  view: string;
  angle: string;
  preview: string | null;
  thumbnail: string | null;
};

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

    views: [
      {
        id: "FA 0001 / P01 / V01",
        pose: "P01",
        view: "V01",
        angle: "Front",
        preview: null,
        thumbnail: null,
      },
      {
        id: "FA 0001 / P01 / V02",
        pose: "P01",
        view: "V02",
        angle: "¾ Front",
        preview: null,
        thumbnail: null,
      },
      {
        id: "FA 0001 / P01 / V03",
        pose: "P01",
        view: "V03",
        angle: "Profile",
        preview: null,
        thumbnail: null,
      },
      {
        id: "FA 0001 / P01 / V04",
        pose: "P01",
        view: "V04",
        angle: "¾ Rear",
        preview: null,
        thumbnail: null,
      },
      {
        id: "FA 0001 / P01 / V05",
        pose: "P01",
        view: "V05",
        angle: "Rear",
        preview: null,
        thumbnail: null,
      },
    ],
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

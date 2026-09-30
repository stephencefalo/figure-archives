export type Study = {
  slug: string;
  id: string;
  title: string;
  artist: string;
  location: string;
  year: number;
  references: number;
  poses: number;
  perspectives: number;
  lighting: string;
  category: string;
  price: number;
  description: string;
};

export const studies: Study[] = [
  {
    slug: "fa-0001-reclining-figure",
    id: "FA 0001",
    title: "Reclining Figure I",
    artist: "Stephen Cefalo",
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
  },

  {
    slug: "fa-0002-gesture-movement",
    id: "FA 0002",
    title: "Gesture & Movement I",
    artist: "Stephen Cefalo",
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
  },

  {
    slug: "fa-0003-light-shadow",
    id: "FA 0003",
    title: "Light & Shadow I",
    artist: "Stephen Cefalo",
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
  },

  {
    slug: "fa-0004-multi-angle",
    id: "FA 0004",
    title: "The Turning Figure I",
    artist: "Stephen Cefalo",
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
  },
];

export function getStudy(slug: string) {
  return studies.find((study) => study.slug === slug);
}

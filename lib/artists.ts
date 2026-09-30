export type ArchiveArtist = {
  slug: string;
  archiveId: string;
  name: string;
  role: string;
  location: string;
  since: number;
  biography: string;
  statement: string;
  website?: string;
  instagram?: string;
};

export const artists: ArchiveArtist[] = [
  {
    slug: "stephen-cefalo",
    archiveId: "FA ARTIST 001",
    name: "Stephen Cefalo",
    role: "Founding Contributor",
    location: "Charleston, South Carolina",
    since: 2026,

    biography:
      "Stephen Cefalo is a Charleston-based fine artist whose work is grounded in the classical tradition and the continued study of the human figure. His contribution to Figure Archives explores photography not simply as an image-making medium, but as a working resource for painters, draftspeople, sculptors, and students.",

    statement:
      "The purpose of the study is not to replace observation. It is to preserve enough information that another artist can continue the act of looking.",
  },
];

export function getArtist(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}

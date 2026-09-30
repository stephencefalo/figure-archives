import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Figure Archives — The Human Form. Made for Artists.",
    template: "%s — Figure Archives",
  },
  description:
    "A curated digital archive of premium photographic figure reference for painters, illustrators, sculptors, and students.",
  metadataBase: new URL("https://figurearchives.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

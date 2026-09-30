import "./globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Figure Archives — The Human Form. Made for Artists.",
    template: "%s — Figure Archives",
  },

  description:
    "A curated digital archive of premium photographic figure reference for painters, illustrators, sculptors, and students.",

  metadataBase: new URL(
    "https://figurearchives.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}

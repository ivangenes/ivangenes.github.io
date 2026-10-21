import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@xyflow/react/dist/style.css";
import "./globals.css";

const siteUrl = "https://ivangenes.github.io";
const siteTitle = "Ivan Genes - Senior Software Engineer";
const siteDescription =
  "Senior software engineer with 8+ years of experience in backend architecture, distributed systems and full-stack development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Ivan Genes",
  },
  description: siteDescription,
  keywords: [
    "Senior Software Engineer",
    "Senior Backend Engineer",
    "Full-Stack Engineer",
    "Distributed Systems",
    "Backend Architecture",
    "Java",
    "Spring Boot",
    "NestJS",
  ],
  authors: [{ name: "Ivan Genes", url: siteUrl }],
  creator: "Ivan Genes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ivan Genes",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

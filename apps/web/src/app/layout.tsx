import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next & Nest Monorepo",
  description: "Fullstack Monorepo Starter",
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

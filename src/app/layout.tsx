import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "TalentBridge Bangladesh",
  description:
    "TalentBridge Bangladesh is a dynamic career development organization dedicated to connecting individuals with opportunities that align with their skills and aspirations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased">{children}</body>
    </html>
  );
}

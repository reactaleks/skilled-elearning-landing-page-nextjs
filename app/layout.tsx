import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skilled E-learning Project",
  description: "Project created as part of front end mentor",
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

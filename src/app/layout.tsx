import type { Metadata } from "next";
import { Patrick_Hand, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dheeraj Pal",
  description:
    "Die hard Software Engineer. I love building things and helping people. Very active on Twitter.",
  openGraph: {
    title: "Dheeraj Pal",
    description:
      "Die hard Software Engineer. I love building things and helping people. Very active on Twitter.",
    siteName: "Dheeraj Pal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="bg-background min-h-full font-sans">{children}</body>
    </html>
  );
}

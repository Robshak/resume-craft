import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const robotoSans = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Resume Craft",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.className}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

import ReduxProvider from "./Provider";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/Context/ThemeContext";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html lang="en" data-theme={theme}>
      <body className={`${robotoSans.className}`}>
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

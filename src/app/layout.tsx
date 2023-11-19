import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "아주대학교 학생식당",
  description: "아주대학교 학생식당 정보 제공 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-crust dark:bg-crust-dark text-text dark:text-text-dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={
          notoSansKR.className +
          " bg-mantle dark:bg-mantle-dark h-screen max-w-md mx-auto"
        }
      >
        {children}
      </body>
    </html>
  );
}

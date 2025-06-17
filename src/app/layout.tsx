import type { Metadata } from "next";
import "./globals.css";
import LoadingWrapper from "./components/utils/LoadingWrapper";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teguh Ramadhan | UI UX & Frontend Developer",
  description: "Website Teguh's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${firaCode.variable}`}
    >
      <body className="font-inter antialiased bg-darkbg">
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}

import { Inter, Newsreader } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const newsreader = Newsreader({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

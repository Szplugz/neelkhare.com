import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";

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

export const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400"],
  variable: "--font-mono",
  subsets: ["latin"],
});

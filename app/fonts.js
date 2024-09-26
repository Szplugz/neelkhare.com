import {
  Inter,
  Newsreader,
  IBM_Plex_Mono,
  Piazzolla,
  Bricolage_Grotesque,
} from "next/font/google";
import localFont from "@next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700"],
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

export const piazolla = Piazzolla({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-piazolla",
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-piazolla",
  display: "swap",
});

export const et_book = localFont({
  src: [
    {
      path: "../public/fonts/ET-Book-Italic-Old-Style.woff",
      style: ["italic"],
    },
    {
      path: "../public/fonts/ET-Book-Bold-Line-Figures.woff",
      weight: "700",
    },
  ],
  variable: "--font-et",
});

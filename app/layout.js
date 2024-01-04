import "./_assets/css/globals.css";
import Navigation from "./_components/Navigation.jsx";
import { Inter } from "next/font/google";
import { React } from "react";
import "./page.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Neel Khare",
  description: "yo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="main">
        <Navigation />
        <main className="home-screen">{children}</main>
      </body>
    </html>
  );
}

import "./_assets/css/globals.css";
import Navigation from "./_components/Navigation.jsx";
import { Inter } from "next/font/google";
import { React } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neel Khare",
  description: "yo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

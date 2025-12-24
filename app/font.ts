import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

// Google Font
export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

// Local Fonts
export const lissen = localFont({
  src: "../public/fonts/Lissen.ttf",
  variable: "--font-lissen",
  display: "swap",
});

export const baunk = localFont({
  src: "../public/fonts/Baunk.ttf",
  variable: "--font-other",
  display: "swap",
});

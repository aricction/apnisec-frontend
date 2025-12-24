import { openSans, lissen, baunk } from "./font";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${lissen.variable} ${baunk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

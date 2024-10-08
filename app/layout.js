import localFont from "next/font/local";
import "./globals.css";
import GlobalNavbar from "../components/Navbar";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GlobalNavbar />
        <main className="px-1 py-20 max-w-7xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}

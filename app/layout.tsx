import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Fb_logo from "../images/facebook.png";
import Github_logo from "../images/GitHub-logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-screen  flex flex-col justify-between">
          <div className="py-4 bg-blue-200">
            <header className=" w-full  flex  items-center justify-between max-w-[1400px] m-auto">
              <h1 className="text-4xl cursor-pointer text-black">tosCode</h1>
              <div className="flex gap-8 text-2xl ">
                <Link
                  href="/"
                  className="text-black hover:underline active:underlines focus:underline"
                >
                  Home
                </Link>
                <Link
                  href="/users"
                  className="text-black hover:underline active:underlines focus:underline"
                >
                  Users
                </Link>
                <Link
                  href="/posts"
                  className="text-black hover:underline active:underlines focus:underline"
                >
                  Posts
                </Link>
                <Link
                  href="/blog"
                  className="text-black hover:underline active:underlines focus:underline"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:underline active:underlines focus:underline"
                >
                  About
                </Link>
              </div>
            </header>
          </div>
          {children}
          <div className="py-4 bg-blue-300 pb-[5rem]">
            <footer className="w-full  flex  items-end justify-between max-w-[1200px] m-auto p-2 border-b-2 border-b-gray-600">
              <article className="w-full  flex  items-start justify-between max-w-[1200px] m-auto">
                <div className="text-black w-full flex flex-col ">
                  <h2 className="text-2xl cursor-pointer font-bold mb-2">
                    About Us
                  </h2>
                  <Link href="#">Mission</Link>
                  <Link href="#">Service</Link>
                  <Link href="#">Achivement</Link>
                </div>
                <div className="text-black w-full flex flex-col">
                  <h2 className="text-2xl cursor-pointer font-bold mb-2">
                    Contact Us
                  </h2>
                  <Link href="#">Open Chat</Link>
                  <Link href="#">Get in touch</Link>
                  <Link href="#">Community</Link>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-black text-2xl font-bold mb-2">Social</h2>

                  <div className="flex flex-1">
                    <Image
                      src={Fb_logo}
                      alt="fb logo"
                      className="w-8 cursor-pointer"
                    />
                    <Image
                      src={Github_logo}
                      alt="github logo"
                      className="w-16 cursor-pointer"
                    />
                  </div>
                </div>
              </article>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}

import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <main className="bg-blue-300 p-8">
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
      </main>
    </div>
  );
}

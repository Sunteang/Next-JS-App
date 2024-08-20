import React from "react";
import Link from "next/link";
import Image from "next/image";
import Fb_logo from "../../../images/facebook.png";
import Github_logo from "../../../images/GitHub-logo.png";

export default function Footer() {
  return (
    <div>
      <main className="bg-blue-300 p-8 flex flex-col justify-center items-center">
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
                  className="w-10 cursor-pointer"
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
        <aside className=" mt-4">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            SabaiCode Ltd and Mr. Teanq
          </p>
        </aside>
      </main>
    </div>
  );
}

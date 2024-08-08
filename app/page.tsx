import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Loading from "./users/loading";

export default function Home() {
  return (
    <div className="max-w-[1200px] m-auto flex-col flex justify-center items-center w-full h-screen bg-gray-100">
      <h1 className="text-[3rem] mb-4">Welcome to, </h1>
      <h1 className="text-[10rem] mb-4">tosCode</h1>
      <div className="flex ">
        <h2>Follow me on Facebook : </h2>

        <FontAwesomeIcon
          className="ml-4 text-blue-500 cursor-pointer w-14"
          icon={faFacebookSquare}
        />
      </div>
    </div>
  );
}

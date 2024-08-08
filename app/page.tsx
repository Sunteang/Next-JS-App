import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="max-w-[1200px] m-auto flex-col flex justify-center items-center w-full h-screen">
      <h1 className="text-3xl mb-4">This is Home Page</h1>
      <h2>
        Follow me on Facebook <FontAwesomeIcon icon={faFacebookSquare} />
      </h2>
    </div>
  );
}

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Hero_dev from "../images/developer-hero.jpg";

export default function Home() {
  return (
    <div className="max-w-[1400px] m-auto bg-gray-100 flex-col flex justify-center items-center w-full h-screen  pb-16">
      <h1 className="text-[3rem] m-4 ">Welcome to, </h1>
      <Image src={Hero_dev} alt="hero image" className=" w-auto rounded-2xl" />
      <h1 className="text-[7rem] mb-4 font-bold p-2 border-b-2 border-b-gray-600">
        tosCode
      </h1>
      <div className="flex mb-4">
        <h2>Follow me on Facebook : </h2>
        <a href="https://www.facebook.com/sunt.teang" target="blank">
          <FontAwesomeIcon
            className="ml-4 text-blue-500 cursor-pointer w-14"
            icon={faFacebookSquare}
          />
        </a>
        <a href="https://www.linkedin.com/in/sunteangserey" target="blank">
          <FontAwesomeIcon
            className="ml-4 text-blue-500 cursor-pointer w-14"
            icon={faLinkedin}
          />
        </a>
      </div>
    </div>
  );
}

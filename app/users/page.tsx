import React from "react";
import Image from "next/image";
import Kidd from "../../images/kidd.webp";

import Button from "../components/atoms/buttons/button02";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  if (!res.ok) {
    throw new Error("Network response was Bad");
  }
  return (
    <div className="max-w-[1400px] m-auto  flex flex-col justify-center items-center w-full h-screen bg-gray-100">
      <h1 className=" text-4xl font-bold mt-14 my-8 text-gray-900 p-2 border-b-2 border-b-gray-600">
        Users Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 mb-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="mb-4">
              <Image src={Kidd} alt="kid" className="w-24 h-24 rounded-full" />
            </div>
            <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.username}</p>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        ))}
      </div>
      <Button className="mb-16">Back Home</Button>
    </div>
  );
}

export default UsersPage;

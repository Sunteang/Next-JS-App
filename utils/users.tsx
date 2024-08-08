import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  // website: string;
}

async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div className="max-w-[1200px] m-auto flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-bold my-4">Users Information</h1>
      <div className="grid grid-cols-2 gap-2 p-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between m-1 p-4 bg-white shadow-lg rounded-lg text-gray-700"
          >
            <div className="flex flex-col space-y-1">
              <h1 className="text-lg ">{user.name}</h1>
              <p className="text-sm">{user.username}</p>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <div className="text-sm">{user.email}</div>
              <div className="text-sm">{user.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;

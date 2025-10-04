import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "Chandi Charan Mahato" },
    { id: 2, name: "Anurag Varshney" },
    { id: 3, name: "Hitesh Choudhary" },
  ];

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/user/${user.id}`}
              className="text-blue-500 hover:underline text-lg"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

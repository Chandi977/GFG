import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  const users = {
    1: {
      name: "Chandi Charan Mahato",
      username: "Chandi977",
    },
    2: {
      name: "Anurag Varshney",
      username: "AnuragV",
    },
  };

  const user = users[id];

  if (!user) {
    return (
      <div className="text-center p-10 text-red-600 font-semibold text-xl">
        User not found
      </div>
    );
  }

  return (
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-lg mb-2">Username: {user.username}</p>
    </div>
  );
};

export default UserProfile;

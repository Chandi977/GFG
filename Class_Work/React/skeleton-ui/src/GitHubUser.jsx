import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GitHubUser = ({ username = "Chandi977", forceLoading = false }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [username]);

  // Combine both loading conditions
  const isLoading = loading || forceLoading;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
        {isLoading ? (
          <>
            <Skeleton
              circle
              height={100}
              width={100}
              className="mx-auto mb-4"
            />
            <Skeleton count={2} />
          </>
        ) : (
          <>
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mx-auto mb-4 border"
            />
            <h2 className="text-2xl font-semibold mb-2">
              {user.name || user.login}
            </h2>
            <p className="text-gray-600 mb-4">@{user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Profile
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default GitHubUser;

import React, { useState, useEffect } from "react";
import GitHubUser from "./GitHubUser.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GitHubUser username="Chandi977" forceLoading={loading} />
    </>
  );
}

export default App;

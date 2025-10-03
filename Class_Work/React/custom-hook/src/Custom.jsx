import React, { useState, useEffect } from "react";

const Custom = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [url]);

  return [data];
};

export default Custom;

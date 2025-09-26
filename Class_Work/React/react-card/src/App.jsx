import React from "react";
import Card from "./components/Card";
import { createContext } from "react";
// import Card1 from "./components/Card1";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();
const App = () => {
  const data = {
    title: "Hello from App.jsx",
    description: "This data goes directly to Card3 🚀",
  };
  return (
    <DataContext.Provider value={data}>
      <Card
        title={"Chandi Charan Mahato"}
        imageUrl={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        }
        description={"Hello I am Student in Geeks for Geeks"}
      />
      <Card
        title={"Vickey Verma"}
        imageUrl={
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        }
        description={"Hello I am Student in Geeks for Geeks"}
      />
    </DataContext.Provider>
  );
};

export default App;

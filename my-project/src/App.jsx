import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import List from "./components/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="services">
          <List/>
        </div>
      </main>
    </div>
  );
};

export default App;

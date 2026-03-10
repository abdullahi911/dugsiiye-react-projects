import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Postpages/Nav";

const App = () => {
  return (
    <div>
      <Nav />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
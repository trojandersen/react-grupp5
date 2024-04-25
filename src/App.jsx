import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home title={"E-WALLET"} subtitle={"ACTIVE CARD"} />}
        />
        <Route
          path="/add-card"
          element={
            <AddCard title={"ADD A NEW BANK CARD"} subtitle={"NEW CARD"} />
          }
        />
      </Routes>
    </>
  );
}

export default App;

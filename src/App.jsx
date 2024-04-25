import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </>
  );
}

export default App;

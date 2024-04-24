import { useState } from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
      <Button />
    </>
  );
}

export default App;

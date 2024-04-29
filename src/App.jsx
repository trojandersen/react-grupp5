import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";

function App() {

const addNewCard = () => {
  const newestCard = {id: cards.length +1, name: 'New card'};
  const newCardList = [...cards, newestCard]
  setCards(newCardList)
}

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home title={"E-WALLET"} subtitle={"ACTIVE CARD"} onClick={addNewCard}/>}
        />
        <Route
          path="/add-card"
          element={
            <AddCard title={"ADD A NEW BANK CARD"} subtitle={"NEW CARD"} onClick={addNewCard}/>
          }
        />
      </Routes>
    </>
  );
}

export default App;

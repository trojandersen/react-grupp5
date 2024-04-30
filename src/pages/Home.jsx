import React, { useState } from "react";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";
import Button from "../components/Button";
import cardData from "../cardData";

function Home({ title, subtitle }) {
  const [cards, setCards] = useState(cardData);

  /* Innan hade vi korten uppdelade, nu en lista med alla istället
  Map för att uppdatera status på klickat kort till active och de andra till inaktiva */
  const handleCardClick = (clickedCard) => {
    const updatedCards = cards.map((card) => {
      if (card === clickedCard) {
        return { ...card, active: true };
      } else {
        return { ...card, active: false };
      }
    });
    setCards(updatedCards);
  };

  /*  Find/filter för att separera aktiva och inaktiva kort från varandra */
  const activeCard = cards.find((card) => card.active);
  const inactiveCards = cards.filter((card) => !card.active);

  return (
    <>
      {/* Använder activeCard och inactiveCards istället för firstCard/cardForStack */}
      <Top title={title} subtitle={subtitle} />
      {/* Kontrollerar om activeCard är definierat */}
      {activeCard && <Card props={activeCard} />}
      <CardStack cards={inactiveCards} onClick={handleCardClick} />
      <Button
        buttontext={"ADD A NEW CARD"}
        path={"/add-card"}
        style={"primary-button"}
      />
    </>
  );
}

export default Home;

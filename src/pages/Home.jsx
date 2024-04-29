import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";
import Button from "../components/Button";
import cardData from "../cardData"
import { useState } from "react";

function Home({ title, subtitle }) {

  let firstCard = cardData.filter(card => card.active === true)[0];
  let cardStack = cardData.filter(card => card.active !== true);
  let cardForStack = cardStack.map(card => card)

  const [cardOnTop, setCardOnTop] = useState(false)
  function replaceCard(){
    setCardOnTop(cardData.map(card => card.active === true))
  }


  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <Card props={firstCard} />
      <CardStack props={cardForStack} onClick={replaceCard}/>
      <Button
        buttontext={"ADD A NEW CARD"}
        path={"/add-card"}
        style={"primary-button"}
        
      />
    </>
  );
}

export default Home;

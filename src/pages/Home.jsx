import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";
import Button from "../components/Button";
import cardData from "../cardData"

function Home({ title, subtitle }) {

  let firstCard = cardData.filter(card => card.id === 1)[0];
  let cardStack = cardData.filter(card => card.id !== 1)
  let cardForStack = cardStack.map(card => card)

  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <Card props={firstCard}/>
      <CardStack props={cardForStack}/>
      <Button
        buttontext={"ADD A NEW CARD"}
        path={"/add-card"}
        style={"primary-button"}
      />
    </>
  );
}

export default Home;

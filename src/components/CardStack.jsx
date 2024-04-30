import Card from "./Card";

function CardStack(props) {
  const { cards, onClick } = props;

  /* Skapar en array för alla inaktiva kort */
  const inactiveCards = cards.filter((card) => !card.active);

  /* Renderar varje inaktivt kort */
  const cardDet = inactiveCards.map((card, index) => (
    <Card
      key={index}
      props={card}
      style={{ marginTop: index === 0 ? 0 : -175 }}
      /* Skickar med hela kortobjektet till handleCardClick (som finns i Home), istället för att anv
      index. Kunde inte uppdatera korten som jag ville annars */
      onClick={() => onClick(card)}
    />
  ));

  return (
    <>
      <section className="card-stack mt-6 mb-6">{cardDet}</section>
    </>
  );
}

export default CardStack;

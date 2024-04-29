import Card from "./Card";

function CardStack(props) {

  let cards = props.props;

  let cardDet = cards.map((card, index) => (
    <Card
        key={index}
        props={card}
        style={{marginTop: -155}}
        onClick={props.onClick}
    />
))

return(
  <>
  <section className=" card-stack mt-44 mb-6">
      {cardDet}
  </section>
  </>
)

}

export default CardStack;

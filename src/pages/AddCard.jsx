import Card from "../components/Card";
import CardForm from "../components/CardForm";
import Top from "../components/Top";
import Button from "../components/Button";

function AddCard() {
  return (
    <>
      <h1>AddCard</h1>
      <Top />
      <Card />
      <CardForm />
      <Button buttontext={"ADD CARD"} />
    </>
  );
}

export default AddCard;

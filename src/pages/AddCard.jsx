import Card from "../components/Card";
import CardForm from "../components/CardForm";
import Top from "../components/Top";
import Button from "../components/Button";

function AddCard({ title, subtitle }) {
  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <Card />
      <CardForm />
      <Button buttontext={"ADD CARD"} path={"/"} style={"secondary-button"} />
    </>
  );
}

export default AddCard;

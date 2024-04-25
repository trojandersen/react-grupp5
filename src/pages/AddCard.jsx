import Card from "../components/Card";
import CardForm from "../components/CardForm";
import Top from "../components/Top";

function AddCard({ title, subtitle }) {
  return (
    <>
      <h1>AddCard</h1>
      <Top title={title} subtitle={subtitle} />
      <Card />
      <CardForm />
    </>
  );
}

export default AddCard;

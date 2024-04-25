import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";
import Button from "../components/Button";

function Home({ title, subtitle }) {
  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <Card />
      <CardStack />
      <Button
        buttontext={"ADD A NEW CARD"}
        path={"/add-card"}
        style={"primary-button"}
      />
    </>
  );
}

export default Home;

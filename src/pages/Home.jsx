import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";
import Button from "../components/Button";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Top />
      <Card />
      <CardStack />
      <Button buttontext={"ADD A NEW CARD"} />
    </>
  );
}

export default Home;

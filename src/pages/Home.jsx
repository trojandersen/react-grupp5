import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";

function Home({ title, subtitle }) {
  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <Card />
      <CardStack />
    </>
  );
}

export default Home;

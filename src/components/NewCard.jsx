import Chip from "../images/chip.svg";
import Wifi from "../images/wifi.svg";
import Bitcoin from "../images/bitcoin.svg";

function NewCard({ newCardData }) {
  console.log(newCardData);
  return (
    <div className=" font-mono rounded-lg max-w-96 bg-slate-500 p-4 mx-auto">
      <header className="flex  justify-between items-start">
        <section>
          <img src={Wifi} alt="wifi icon" />
          <img src={Chip} alt="chip icon" />
        </section>
        <img src={Bitcoin} alt="bitcoin logo" />
      </header>
      <main>
        <p className=" text-3xl pt-4 pb-5">1231</p>
      </main>
      <footer className="flex  justify-between">
        <section>
          <p className=" text-xs">CARDHOLDER NAME</p>
          <p className=" text-lg">RACHEL RICHTER</p>
        </section>
        <section className="text-right">
          <p className=" text-xs">VALID THRU</p>
          <p className=" text-lg ">12/24</p>
        </section>
      </footer>
    </div>
  );
}

export default NewCard;

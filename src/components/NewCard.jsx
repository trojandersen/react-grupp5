import Chip from "../images/chip.svg";
import Wifi from "../images/wifi.svg";

import bitcoin from "../images/bitcoin.svg";
import ninjaBank from "../images/ninjabank.svg";
import blockChain from "../images/blockchain.svg";
import evilCorp from "../images/evilcorp.svg";
import cardData from "../cardData";

function NewCard({ newCardData }) {
  const { cardNum, cardName, cardDate, vendor } = newCardData;

  let vendorLogo;
  let vendorColor;
  switch (vendor) {
    case "bitcoin":
      vendorLogo = bitcoin;
      vendorColor = "bitcoin";
      break;
    case "ninjaBank":
      vendorLogo = ninjaBank;
      vendorColor = "ninjabank";
      break;
    case "blockChain":
      vendorLogo = blockChain;
      vendorColor = "blockchain";
      break;
    case "evilCorp":
      vendorLogo = evilCorp;
      vendorColor = "evilcorp";
      break;
    default:
      vendorLogo = bitcoin;
      vendorColor = "placeholdergray";
  }

  return (
    <div
      className={`${vendorColor} font-mono rounded-lg  max-w-96 p-4 mx-auto min-h-56`}
    >
      <header className="flex  justify-between items-start">
        <section>
          <img src={Wifi} alt="wifi icon" />
          <img src={Chip} alt="chip icon" />
        </section>

        {vendorLogo && <img src={vendorLogo} alt={`${vendor} logo`} />}
      </header>
      <main>
        <p className=" text-3xl pt-4 pb-5">{cardNum}</p>
      </main>
      <footer className="flex  justify-between">
        <section>
          <p className=" text-xs">CARDHOLDER NAME</p>

          <p className=" text-lg">{cardName}</p>
        </section>
        <section className="text-right">
          <p className=" text-xs">VALID THRU</p>
          <p className=" text-lg ">{cardDate}</p>
        </section>
      </footer>
    </div>
  );
}

export default NewCard;

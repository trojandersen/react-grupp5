import Chip from "../images/chip.svg";
import Wifi from "../images/wifi.svg";
import BitcoinLogo from "../images/bitcoin.svg";
import NinjaBankLogo from "../images/ninjabank.svg";
import BlockChainLogo from "../images/blockchain.svg";
import EvilCorpLogo from "../images/evilcorp.svg";

function NewCard({ newCardData }) {
  const { cardNumber, cardholderName, validThru, vendor } = newCardData;

  let vendorLogo;
  switch (vendor) {
    case "Bitcoin inc":
      vendorLogo = BitcoinLogo;
      break;
    case "Ninja bank":
      vendorLogo = NinjaBankLogo;
      break;
    case "Block chain inc":
      vendorLogo = BlockChainLogo;
      break;
    case "Evil corp":
      vendorLogo = EvilCorpLogo;
      break;
    default:
      vendorLogo = null;
  }

  return (
    <div className=" font-mono rounded-lg max-w-96 bg-slate-500 p-4 mx-auto">
      <header className="flex  justify-between items-start">
        <section>
          <img src={Wifi} alt="wifi icon" />
          <img src={Chip} alt="chip icon" />
        </section>
        {vendorLogo && <img src={vendorLogo} alt={`${vendor} logo`} />}
      </header>
      <main>
        <p className=" text-3xl pt-4 pb-5">{cardNumber}</p>
      </main>
      <footer className="flex  justify-between">
        <section>
          <p className=" text-xs">CARDHOLDER NAME</p>
          <p className=" text-lg">{cardholderName}</p>
        </section>
        <section className="text-right">
          <p className=" text-xs">VALID THRU</p>
          <p className=" text-lg ">{validThru}</p>
        </section>
      </footer>
    </div>
  );
}

export default NewCard;

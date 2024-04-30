import Chip from "../images/chip.svg";
import Wifi from "../images/wifi.svg";
import bitcoin from "../images/bitcoin.svg";
import blockChain from "../images/blockchain.svg";
import ninjaBank from "../images/ninjabank.svg";
import evilCorp from "../images/evilcorp.svg";
import "../styles/Card.css";
import { useState } from "react";

function Card(props) {
  let cardPlacement = props.style;

  let cardDet = props.props;

  const cardNum = cardDet.cardNum;
  const cardName = cardDet.cardName;
  const cardDate = cardDet.cardDate;

  let vendorLogo;
  let vendorColor;

  switch (cardDet.vendor) {
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
      vendorColor = "bitcoin";
  }

  return (
    <div
      className={`${vendorColor} relative font-mono rounded-lg max-w-96 p-4 mx-auto boxshadow`}
      style={cardPlacement}
      onClick={props.onClick}
    >
      <header className="flex  justify-between items-start">
        <section>
          <img src={Wifi} alt="wifi icon" />
          <img src={Chip} alt="chip icon" />
        </section>
        <img src={vendorLogo} alt="" />
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

export default Card;

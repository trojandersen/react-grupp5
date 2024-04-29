import CardForm from "../components/CardForm";
import Top from "../components/Top";
import Button from "../components/Button";
import React, { useState } from "react";
import NewCard from "../components/NewCard";
import cardData from "../cardData";

function AddCard({ title, subtitle, onClick }) {
  const [formData, setFormData] = useState({
    cardNum: "XXXX XXXX XXXX XXXX",
    cardName: "FIRSTNAME LASTNAME",
    cardDate: "MM/YY",
    ccv: "",
    vendor: "",
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  
  function addCard() {
    cardData.push(formData)
    console.log(cardData)
  }

  

  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <NewCard newCardData={formData} />
      <CardForm onFormChange={handleFormChange} />
      <Button buttontext={"ADD CARD"} path={"/"} style={"secondary-button"} onClick={addCard}  />
    </>
  );
}

export default AddCard;

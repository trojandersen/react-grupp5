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

  const onFormChange = (id, updatedValue) => {
    setFormData({
      ...formData,
      [id]: updatedValue,
    });
  };
  function addNewCard() {
    cardData.push(formData)
    console.log(cardData)
  }
  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <NewCard newCardData={formData} />
      <CardForm onFormChange={onFormChange} />
      <Button buttontext={"ADD CARD"} path={"/"} style={"secondary-button"} onClick={addNewCard}  />
    </>
  );
}

export default AddCard;

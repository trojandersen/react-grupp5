import CardForm from "../components/CardForm";
import Top from "../components/Top";
import Button from "../components/Button";
import React, { useState } from "react";
import NewCard from "../components/NewCard";

function AddCard({ title, subtitle }) {
  const [formData, setFormData] = useState({
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardholderName: "FIRSTNAME LASTNAME",
    validThru: "MM/YY",
    ccv: "",
    vendor: "bitcoin",
  });

  const onFormChange = (id, updatedValue) => {
    setFormData({
      ...formData,
      [id]: updatedValue,
    });
  };
  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <NewCard newCardData={formData} />
      <CardForm onFormChange={onFormChange} />
      <Button buttontext={"ADD CARD"} path={"/"} style={"secondary-button"} />
    </>
  );
}

export default AddCard;

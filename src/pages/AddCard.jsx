import CardForm from "../components/CardForm";
import Top from "../components/Top";
import Button from "../components/Button";
import React, { useState } from "react";
import NewCard from "../components/NewCard";

function AddCard({ title, subtitle }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    validThru: "",
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

  return (
    <>
      <Top title={title} subtitle={subtitle} />
      <NewCard newCardData={formData} />
      <CardForm onFormChange={handleFormChange} />
      <Button buttontext={"ADD CARD"} path={"/"} style={"secondary-button"} />
    </>
  );
}

export default AddCard;

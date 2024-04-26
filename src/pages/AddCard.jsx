import CardForm from "../components/CardForm";
import Top from "../components/Top";
import Button from "../components/Button";
import React, { useState } from "react";
import NewCard from "../components/NewCard";

function AddCard({ title, subtitle }) {
  const [formData, setFormData] = useState(null);

  const handleFormChange = (updatedFormData) => {
    console.log("Changes", updatedFormData);
    setFormData(updatedFormData);
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

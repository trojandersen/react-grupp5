import "../styles/CardForm.css";
import React, { useState } from "react";

function CardForm({ onFormChange }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let updatedValue = value;
    if (id === "cardNumber") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 16);
      const formattedCardNumber = formattedValue.match(/.{1,4}/g)?.join(" ");
      updatedValue = formattedCardNumber || "XXXX XXXX XXXX XXXX";
    } else if (id === "cardholderName") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
    }

    // Trigger parent component's form change handler
    onFormChange(id, updatedValue);
  };

  return (
    <section>
      <form className="form-wrapper">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          type="text"
          id="cardNumber"
          onChange={handleInputChange}
          maxLength={16}
          onKeyDown={(e) => {
            if (
              !(
                (e.key >= "0" && e.key <= "9") ||
                e.key === "Backspace" ||
                e.key === "Delete" ||
                e.key === "Tab"
              )
            ) {
              e.preventDefault();
            }
          }}
        />

        <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cardholderName"
          onChange={handleInputChange}
          placeholder="FIRSTNAME LASTNAME"
          style={{ textTransform: "uppercase" }}
          maxLength={24}
          onKeyDown={(e) => {
            const isValidChar = /^[a-zA-Z\s]*$/.test(e.key);
            if (!isValidChar) {
              e.preventDefault();
            }
          }}
        />

        <div className="form-details">
          <div className="form-valid">
            <label htmlFor="valid">VALID THRU</label>
            <input type="date" id="validThru" onChange={handleInputChange} />
          </div>

          <div className="form-ccv">
            <label htmlFor="ccv">CCV</label>
            <input
              className="ccv"
              type="text"
              id="ccv"
              onChange={handleInputChange}
              maxLength={3}
              onKeyDown={(e) => {
                if (
                  !(
                    (e.key >= "0" && e.key <= "9") ||
                    e.key === "Backspace" ||
                    e.key === "Delete" ||
                    e.key === "Tab"
                  )
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>

        <label htmlFor="vendor">VENDOR</label>
        <select id="vendor" onChange={handleInputChange}>
          <option value="">Select vendor</option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninjaBank">NINJA BANK</option>
          <option value="blockChain">BLOCK CHAIN INC</option>
          <option value="evilCorp">EVIL CORP</option>
        </select>
      </form>
    </section>
  );
}

export default CardForm;

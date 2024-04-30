import "../styles/CardForm.css";
import React, { useState } from "react";

function CardForm({ onFormChange }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let updatedValue = value;
    if (id === "cardNum") {
      const formattedValue = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .padEnd(16, "X");

      const formattedCardNumber = formattedValue.match(/.{1,4}/g)?.join(" ");

      updatedValue = formattedCardNumber || "XXXX XXXX XXXX XXXX";
    } else if (id === "cardName") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
    } else if (id === "cardDate") {
      updatedValue = value.match(/.{1,2}/g)?.join("/");
    }

    // Trigger parent component's form change handler
    onFormChange(id, updatedValue);
  };

  // checks the inputfield for eligble characters (numbers)
  const numberInputCheck = (e) => {
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
  };

  return (
    <section>
      <form className="form-wrapper">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          type="text"
          id="cardNum"
          onChange={handleInputChange}
          maxLength={16}
          onKeyDown={numberInputCheck}
        />

        <label htmlFor="card-name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cardName"
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
            <input
              type="text"
              id="cardDate"
              onChange={handleInputChange}
              maxLength={4}
              onKeyDown={numberInputCheck}
            />
          </div>

          <div className="form-ccv">
            <label htmlFor="ccv">CCV</label>
            <input
              className="ccv"
              type="text"
              id="ccv"
              onChange={handleInputChange}
              maxLength={3}
              onKeyDown={numberInputCheck}
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

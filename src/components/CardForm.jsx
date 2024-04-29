import "../styles/CardForm.css";
import React, { useState } from "react";

function CardForm({ onFormChange }) {


  return (
    <section>
      <form className="form-wrapper">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input type="number" id="cardNumber" onChange={onFormChange} />

        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cardholderName"
          onChange={onFormChange}
          placeholder="FIRSTNAME LASTNAME"
        />

        <div className="form-details">
          <div className="form-valid">
            <label htmlFor="valid">VALID THRU</label>
            <input type="date" id="validThru" onChange={onFormChange} />
          </div>

          <div className="form-ccv">
            <label htmlFor="ccv">CCV</label>
            <input
              className="ccv"
              type="number"
              id="ccv"
              onChange={onFormChange}
            />
          </div>
        </div>

        <label htmlFor="vendor">VENDOR</label>
        <select id="vendor" onChange={onFormChange}>
          <option value="">Select vendor</option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninjaBank">NINJA BANK</option>
          <option value="blockChain">BLOCK CHAIN INC</option>
          <option value="evilCorp">EVIL CORP</option>
        </select>
      </form>
    </section>
  );
};

export default CardForm;

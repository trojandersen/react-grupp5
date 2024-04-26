import "../styles/CardForm.css";
import React, { useState } from "react";

const CardForm = ({ onFormChange }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    valid: "",
    ccv: "",
    vendor: "",
  });
  const handleInputChange = (e) => {
    const { i, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [i]: value,
    }));
    // Call the onFormChange callback with the updated form data
    onFormChange(formData);
  };
  return (
    <section>
      <form className="form-wrapper">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          type="text"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          value={formData.cardName}
          onChange={handleInputChange}
          placeholder="FIRSTNAME LASTNAME"
        />

        <div className="form-details">
          <div className="form-valid">
            <label htmlFor="valid">VALID THRU</label>
            <input
              type="text"
              value={formData.valid}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-ccv">
            <label htmlFor="ccv">CCV</label>
            <input
              className="ccv"
              value={formData.ccv}
              type="text"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label htmlFor="vendor">VENDOR</label>
        <select value={formData.vendor} onChange={handleInputChange}>
          <option value="Select vendor"></option>
          <option value="Bitcoin inc">BITCOIN INC</option>
          <option value="Ninja bank">NINJA BANK</option>
          <option value="Block chain inc">BLOCK CHAIN INC</option>
          <option value="Evil corp">EVIL CORP</option>
        </select>
      </form>
    </section>
  );
};

export default CardForm;

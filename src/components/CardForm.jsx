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
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    // Call the onFormChange callback with the updated form data
    onFormChange(formData);
  };
  return (
    <section>
      <form className="form-wrapper">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          name="cardNumber"
          type="text"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          name="cardName"
          type="text"
          value={formData.cardName}
          onChange={handleInputChange}
          placeholder="FIRSTNAME LASTNAME"
        />

        <div className="form-details">
          <div className="form-valid">
            <label htmlFor="valid">VALID THRU</label>
            <input
              name="valid"
              type="text"
              value={formData.valid}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-ccv">
            <label htmlFor="ccv">CCV</label>
            <input
              name="ccv"
              type="text"
              value={formData.ccv}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label htmlFor="vendor">VENDOR</label>
        <select
          name="vendor"
          value={formData.vendor}
          onChange={handleInputChange}
        >
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

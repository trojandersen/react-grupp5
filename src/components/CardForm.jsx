import "../styles/CardForm.css";

function CardForm() {
  return (
    <section>
      <form className="form-wrapper">
        <label htmlFor="card-number">CARD NUMBER</label>
        <input type="number" id="card-number" />

        <label htmlFor="name">CARDHOLDER NAME</label>
        <input type="text" id="name" placeholder="FIRSTNAME LASTNAME" />

        <div className="form-details">
          <div className="form-valid">
            <label htmlFor="valid">VALID THRU</label>
            <input type="date" id="valid" />
          </div>

          <div className="form-ccv">
            <label htmlFor="ccv">CCV</label>
            <input className="ccv" type="number" id="ccv" />
          </div>
        </div>

        <label htmlFor="vendor">VENDOR</label>
        <select id="vendor">
          <option value="Select vendor"></option>
          <option value="Bitcoin inc">BITCOIN INC</option>
          <option value="Ninja bank">NINJA BANK</option>
          <option value="Block chain inc">BLOCK CHAIN INC</option>
          <option value="Evil corp">EVIL CORP</option>
        </select>
      </form>
    </section>
  );
}

export default CardForm;

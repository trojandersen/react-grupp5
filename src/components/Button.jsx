import "../styles/Button.css";
import { Link } from "react-router-dom";

function Button({ buttontext, path, style, onClick }) {

  return (
    <>
      <Link to={path}>
        <button onClick={onClick} className={`${style} button`}>{buttontext}</button>
      </Link>
    </>
  );
}

export default Button;

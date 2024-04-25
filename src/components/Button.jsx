import "../styles/Button.css";
import { Link } from "react-router-dom";

function Button({ buttontext, path, style }) {
  return (
    <>
      <Link to={path}>
        <button className={`${style} button`}>{buttontext}</button>
      </Link>
    </>
  );
}

export default Button;

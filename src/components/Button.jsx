import "../styles/Button.css";
import { Link } from "react-router-dom";

function Button({ buttontext, path, style, onSubmit }) {
  // const handleClick = () => {
  //   onSubmit();
  // };
  return (
    <>
      <Link to={path}>
        <button className={`${style} button`}>{buttontext}</button>
      </Link>
    </>
  );
}

export default Button;

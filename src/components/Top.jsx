import "../styles/Top.css";

function Top(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
}

export default Top;

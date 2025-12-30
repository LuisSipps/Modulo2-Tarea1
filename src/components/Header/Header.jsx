import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Header.css";

function Header() {
  console.log("Header renderizado");

  return (
    <header className="header">
      <h1>Este es el header</h1>
      <SearchBar />
    </header>
  );
}

export default Header;

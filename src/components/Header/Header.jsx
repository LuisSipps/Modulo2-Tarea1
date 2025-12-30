import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Header.css";

function Header() {
  console.log("Header renderizado");

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">Logo</div>
        <div className="header-store-name">Chity Serigrafía</div>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;

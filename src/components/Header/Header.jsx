import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Header.css";
import { images } from "../../assets/images/images.js";

function Header() {
  console.log("Header renderizado");

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          {console.log("IMAGES:", images)}
          <img src={images.logo} alt="Chity Serigrafía" />
        </div>
        <div>Productos</div>
        <div>Animes</div>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;

import SearchBar from "../SearchBar/SearchBar.jsx";
import { images } from "../../assets/images/images.js";
import "./Header.css";

function Header({onSearch}) {
  console.log("Header renderizado");

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          {console.log("IMAGES:", images)}
          <img src={images.logo} alt="Chity Serigrafía" />
        </div>
        <nav className="menu">
          <a href="#" className="menu-item"> Productos </a>
          <a href="#" className="menu-item"> Animes </a>
        </nav>
      </div>
      <SearchBar onSearch={onSearch}/>
    </header>
  );
}

export default Header;

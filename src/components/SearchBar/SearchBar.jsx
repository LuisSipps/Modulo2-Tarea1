import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    console.log("Buscando:", text);
    setValue(text);
    onSearch(text);
  };

  return (
    <input
      type="text"
      placeholder="Busca tus productos o animes preferidos aquí"
      className="search-bar"
      value={value}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
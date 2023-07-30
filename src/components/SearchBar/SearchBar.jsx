import { useState } from "react";
import {
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./SearchBar.styled-component";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="search"
          onChange={handleChange}
          value={id}
          placeholder="Ingrese el ID a buscar"
        />
        <SearchButton onClick={() => onSearch(id)}>Agregar</SearchButton>
      </SearchContainer>
    </div>
  );
}

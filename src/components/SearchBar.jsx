import { useState } from "react";
import stylos from "./gonzalo.module.css"

export default function SearchBar(props) {
   const {onSearch}= props;
   const [character, setCharacter] =
   useState("");

const handleChange = (evento) => {

   setCharacter(evento.target.value)
};

   return (
      <div className={stylos.barra}>
         <input  className={stylos.boton}type='search' value={character} onChange={handleChange}/>
      <button class="material-symbols-outlined"  onClick={()=> onSearch(
         character)}>
search</button>
      </div>
   );
}

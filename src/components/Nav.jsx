import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import stylos from "./gonzalo.module.css";

export default function Nav({onSearch}) {
    return (
    <div>
        
        <SearchBar onSearch={onSearch}/>
        <Link to="/home" className={stylos.nombre}>Home</Link>
      <Link to="/about" className={stylos.nombre}>About</Link>
      <Link to="/favorite" className={stylos.nombre}>Favorites</Link>
        </div>
    )
}
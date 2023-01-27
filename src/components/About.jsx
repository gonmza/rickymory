import React from "react";
import Logo from "./imagen/rym.png"
import name from "./imagen/name.png"
import stylos from "./gonzalo.module.css";
export default function About() {
return(
    <div>
        
       <img className={stylos.logo} src={name} alt="logo name"/><br />
       <img className={stylos.logo2} src={Logo} alt="logo rick"/>
        <h4 className={stylos.especie}>create by: Gonzalo Forconi</h4>
    </div>
);

}
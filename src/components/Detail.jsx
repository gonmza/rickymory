import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import stylos from "./gonzalo.module.css";

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({})
   const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
 
    const goHome=()=>{
      navigate("/home")
    }


     return <div>
       <button onClick={goHome} class="material-symbols-outlined">Home</button> 
   
        <h1 className={stylos.nombre}>Nombre: {character.name}</h1>
        <img className={stylos.image} src={character.image} alt={character.name}/>
       <h2 className={stylos.especie}>Status: {character.status}</h2>
       <h2 className={stylos.especie}>Specie: {character.species} </h2>
       <h2 className={stylos.especie}>Genero: {character.gender}</h2>
       <h2 className={stylos.especie}>Origen: {character.origin?.name}</h2>

     </div>
}
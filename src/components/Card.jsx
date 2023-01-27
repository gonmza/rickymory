import stylos from "./gonzalo.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";

export function Card(props) {
   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
   props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);



 


   return (
      <div className={stylos.divcard}>
      <button className={stylos.boton} onClick={props.onClose}>x</button>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         
      <Link to={"/detail/"+props.id}>
        
         <h2 className={stylos.nombre}>{props.name}</h2>
         </Link>
         <h2 className={stylos.especie}>{props.species}</h2>
         <h2 className={stylos.especie}>{props.gender}</h2>
         
      <img className={stylos.image} src={props.image} alt={props.name}/>
      
      </div>
   )
}








export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
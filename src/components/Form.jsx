import React from "react"
import validation from "./validation"
import stylos from "./gonzalo.module.css";

export default function Form(props) {
const [userData, setUserData] = React.useState({
    username:"",
    password:""
});
const [errors, setErrors] = React.useState({
    username:"",
    password:""
});



function handleInputChange(e){
    setUserData({...userData, [e.target.name]:e.target.value })
    
    setErrors(validation({...userData,[e.target.name]: e.target.value}));
};
const handleSubmit = (e) => {
    e.preventDefault()
    props.login(userData)
}

return (
<div className={stylos.login}>
    <form onSubmit={handleSubmit}>
<label htmlFor="username" className={stylos.nombre}>username: </label>
<input id="username" name="username" placeholder="introduce tu usuario..." type="text" value={userData.username} onChange={handleInputChange}/>
<p className={stylos.especie}>{errors.username}</p>
<label htmlFor="password" className={stylos.nombre}>password: </label>
<input id="password" name="password"  type="password" value={userData.password} onChange={handleInputChange}/>
<p className={stylos.especie}>{errors.password}</p>
<button className={stylos.boton}>LOGIN</button>
</form>
</div>

)}
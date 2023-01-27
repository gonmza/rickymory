

const regexEmail = 
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
const regexPassword =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export function validation(userData){
let errors = {};
if(!regexEmail.test(userData.username)) errors.username = "El nombre de usuario tiene que ser un email "
else if(!userData.username) errors.username = "El usuario no puede estar vacio"
else if(userData.username.length >35) errors.username = "El usuario no puede superar los 35 caracteres"
if(!regexPassword.test(userData.password)) errors.password = "la contraseña debe de tener al menos un numero"
else if(userData.password.length <6 && userData.password >10) errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres"
return errors;
}

export default validation
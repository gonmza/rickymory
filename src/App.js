import { useEffect, useState, } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from "./components/Detail";
import Form from './components/Form';
import Favorites from "./components/favorites/Favorites"


function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'gonzalo@gmail.com';
  const password = 'forconi5';

  function login(userData) {
     if (userData.password === password && userData.username === username) {
        setAccess(true)
        navigate('/home')
     }  
     else{
      alert("usuario o contraseña incorrecta")
     }  
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

const onClose = (id) => {
setCharacters(characters.filter(char => char.id !== id))
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>{location.pathname !== "/" && 
        <Nav onSearch={onSearch}/>}</div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home'element={
          <Cards characters={characters} onClose={onClose} />
        } />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App

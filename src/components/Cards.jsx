import Card from './Card.jsx';
import React from 'react';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div>
      {
         characters.map(char => <Card
            id={char.id}
            key={char.name}
            name={char.name}
            species = {char.species}
            gender = {char.gender}
image = {char.image}
onClose ={() => onClose(char.id)}

            />)
                  }
   </div>;
}

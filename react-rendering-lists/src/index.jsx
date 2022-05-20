import React from 'react';
import ReactDOM from 'react-dom/client';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function Pokemon(props) {
  const pokedex = props.pokedex;
  return (
    <ul>
      {pokedex.map(name => <ListItem key={name.number.toString()} value={name.name} />)}
    </ul>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Pokemon pokedex={pokedex}/>);

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Profile from './profile.js';

function Body() {
    const [chars, setChars] = useState([]);
    const hook = () => {
        console.log('effect');
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(response => {
                console.log('promise fulfilled');
                setChars(response.data.results);
                console.log(response.data.results);                
            });
    };    
    useEffect(hook, []);

    return (
        <div className="flexbox-container">
          <ul>
            {chars.map(char => (<li>{char.name}</li>))}
            {chars.map(char => (<li>{char.status}</li>))}
            {chars.map(char => (<li>{char.species}</li>))}
          </ul>
        </div>
    );
}

export default Body;

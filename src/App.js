import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Body from './components/body.js';
import './App.css';

function App() {
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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Le Rick and Morty Database
            </p>
            <ul>
              {chars.map(char => (<li>{char.name}</li>))}
            </ul>
          </header>
          <Body/>
        </div>
    );
}

export default App;

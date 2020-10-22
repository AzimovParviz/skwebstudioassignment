import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import pickle from './pickle.png';
import Body from './components/body.js';
import './App.css';

function App() {
        
    return (
        <div className="App">
          <header className="App-header">
            <img src={pickle} className="App-logo" alt="logo" />
            <p>
              Le Rick and Morty Database
            </p>
          </header>
          <Body/>
        </div>
    );
}

export default App;

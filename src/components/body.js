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
    var ret = [];
    for (var i=0;i<chars.length;i++)
    {
        ret.push(<Profile props={chars[i]}/>);
    }
    return (
        <div className="flexbox-container">
          {ret}
        </div>
    );
}

export default Body;

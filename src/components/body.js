import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Profile from './profile.js';
import SearchBar from './searchbar.js';

function Body() {
    const [chars, setChars] = useState([]);
    const [term, setTerm] = useState("");
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
    let episodeList = [];
    useEffect(() => {
        chars.forEach((char) => {
            episodeList.push(char.episode);
            console.log(episodeList);
        });
    }, [chars]);
    // var newArray = chars.filter(function (el) {
    //     return el.episode.includes("/episode/"+term);
    // });

    let newArray = [];
    var ret = [];
    for (var i=0;i<chars.length;i++)
    {
        console.log('character '+i+ 'forfucks skae: '+chars[i].episode);
        console.log('search term is '+"https://rickandmortyapi.com/api/episode/"+term);
        if (chars[i].episode.includes("https://rickandmortyapi.com/api/episode/"+term) || term=="")
        {
            ret.push(<Profile props={chars[i]}/>);
        }
    }
    return (
        <div className="flexbox-container">
          <SearchBar placeholder="Enter the episode number..." handleChange={e=>setTerm(e.target.value)}/>
          {ret}
        </div>
    );
}

export default Body;

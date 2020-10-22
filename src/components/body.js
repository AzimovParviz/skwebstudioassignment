import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Profile from './profile.js';
import SearchBar from './searchbar.js';
import NotFound from './notfound.js';

function Body() {
    const [chars, setChars] = useState([]);
    const [term, setTerm] = useState("");
    //делаем реквест к АПИ
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
    //ret - массив для профилей персонажей
    var ret = [];
    for (var i=0;i<chars.length;i++)
    {
        //проверяем, находится ли эпизод в профиле персонажа, т.к массив с эпизодами это ссылки на АПИ эпизодов, то ищем есть ли ссылка на запрошенный эпизод
        if (chars[i].episode.includes("https://rickandmortyapi.com/api/episode/"+term) || term=="")
        {
            ret.push(<Profile props={chars[i]}/>);
        }
        else
        {

        }
    }
    if (ret.length<1)//если не найден эпизод, то пушим в массив только компонент NotFound
    {
        ret.push(<NotFound/>);
    }
    return (
        <div className="flexbox-container">
          <SearchBar placeholder="Enter the episode number..." handleChange={e=>setTerm(e.target.value)}/>
          {ret}
        </div>
    );
}

export default Body;

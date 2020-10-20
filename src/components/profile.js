import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

function Profile (props) {    
    console.log('it\'s working right? lol');
    console.log(props);
    return (
        <div className="profile-card">
          <ul>
            <img src={props.props.image}/>
            <li>{props.props.name}</li>
            <li>{props.props.status}</li>
            <li>{props.props.species}</li>
          </ul>
        </div>
    );
}

export default Profile;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

function Profile (props) {    
    console.log('it\'s working right? lol');
    console.log(props);
    return (
        <div className="profile-card">
          <ul className="character-info" >
            <li className="character-avatar"><img className="character-avatar" src={props.props.image}/></li>
            <li className="profile-item">Name: {props.props.name}</li>
            <li className="profile-item">Status: {props.props.status}</li>
            <li className="profile-item">Species: {props.props.species}</li>
            <li className="profile-item">Gender: {props.props.gender}</li>
            <li className="profile-item">Origin: {props.props.origin.name}</li>
            <li className="profile-item">Location: {props.props.location.name}</li>
          </ul>
        </div>
    );
}

export default Profile;

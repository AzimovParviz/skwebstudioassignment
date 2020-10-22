import React, {useState, useEffect} from 'react';

const SearchBar = (props) => {
    return(
        <div className="search-bar">
          <input type="search" className="search-bar" onChange={props.handleChange} placeholder={props.placeholder}/>
        </div>
    );
}

export default SearchBar;

import React from "react";
import "./SearchBox.css"

const SearchBox = ({ setUserName, searchFn, disabled }) => {
  return (
    <div className="search-box">
      <label htmlFor="user" className="search-box__label">User Name</label>
      <input className="search-box__input" onChange={(event) => setUserName(event.target.value)} type="text" id="user" placeholder="ddavison"/>
      <button onClick={searchFn} className="search-box__button" disabled={disabled}>Search</button>
    </div>
  )
}

export default SearchBox;
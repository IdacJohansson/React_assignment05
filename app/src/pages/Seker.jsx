import React from "react";

import searchIcon from "../assets/search.svg";

function Seker() {
  return (
    <main>
      <div className="search-container">
        <div>
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
        </div>
        <input
          className="search-field"
          type="search"
          id="search-field"
          placeholder="....."
        />
        <button className="search-btn" id="search-btn">
          Search
        </button>
      </div>
      <div className="option-container">
        <ul className="options-ul">
          <li>Hej</li>
          <li>Hej</li>
          <li>Hej</li>
        </ul>
      </div>
    </main>
  );
}

export default Seker;

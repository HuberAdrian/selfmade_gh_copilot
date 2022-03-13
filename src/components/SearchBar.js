import React, { useState, useRef } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const resultRef = useRef();

  const handleFilter = (event) => {

    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.keywords.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {

    }
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onKeyDown={handleKeyDown}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          <ul>
          {filteredData.slice(0, 15).map((value, index) => {
          
            return (
              <a className="dataItem" href={value.link} key={index} target="_blank">
                <li>{value.link} </li>
              </a>
            );
          })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
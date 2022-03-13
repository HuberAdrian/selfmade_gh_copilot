import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [focused, setFocused] = useState(0);
  const fieldRef = useRef();
  const itemsRef = useRef([]);

  useEffect(() => {
       itemsRef.current = itemsRef.current.slice(0, filteredData.length);
    }, [filteredData]);

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
      setFocused(focused +1)
      itemsRef.current[focused]?.focus()
    }
    if (event.key === "ArrowUp" && focused>-1) {
      setFocused(focused -1)
      itemsRef.current[focused]?.focus()
    }
    else if (event.key === "ArrowUp") {
      fieldRef.current?.focus();
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
          ref = {fieldRef}
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
              <a onKeyDown={handleKeyDown} className="dataItem" ref={el => itemsRef.current[index] = el}  href={value.link} key={index}>
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
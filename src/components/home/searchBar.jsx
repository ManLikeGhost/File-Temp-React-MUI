import React, { useState} from "react";
import axios from "axios";
import SearchBar from "material-ui-search-bar";
import LinearProgress from "@material-ui/core/LinearProgress";
// import appStore from "./appStore";
import { API_BASE_URL } from "../../constants/apiConstants";

const SearchBarNav = () => {
  const [word, setWord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(false);
    try {
      const response = await axios.post(`${API_BASE_URL}/search?${word}`);
      setWord(response);
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log("There is an error", error);
    }
  };

  return (
    <div className="searchbar">
      <SearchBar
        value={word}
        onChange={(newValue) => setWord({ value: newValue })}
        onRequestSearch={handleSubmit}
        placeholder="SEARCH BY STATE, AREA, OR CITY"
        autoFocus
      />
      {isLoading && <LinearProgress />}
    </div>
  );
};

export default SearchBarNav;

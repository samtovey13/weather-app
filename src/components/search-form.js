import {useState, React} from 'react';

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }
  const {handleSearchText, errorMessage} = props;

  return <div className="search-form">
    <input 
      className="search-input"
      id="location-search-input"
      type="text"
      value={searchText}
      onChange={(event) => {
        handleInputChange(event);
      }}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          handleSearchText(searchText);
        }
      }}
    >
    </input>

    <button 
      className="search-button"
      onClick={() => handleSearchText(searchText)}
    >
      Search
    </button>

    { errorMessage && (<div className="error-message">
      Error: {errorMessage}
    </div>)}
  </div>
}

export default SearchForm;
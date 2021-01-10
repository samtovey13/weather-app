import {useState, React} from 'react';
import '../styles/search-form.css';

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }
  const {handleSearchText, errorMessage} = props;

  return <div className="search-form">
    <div id="search-input-wrapper">
      <input 
        className="search-input"
        id="location-search-input"
        type="text"
        placeholder="Find a city"
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
        <i className="fa fa-search"></i>
      </button>
    </div>
    { errorMessage && (<div className="error-message">
      {errorMessage}
    </div>)}
  </div>
}

export default SearchForm;
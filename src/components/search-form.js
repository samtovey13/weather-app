import {useState, React} from 'react';
import PropTypes from 'prop-types';
import '../styles/search-form.css';

const SearchForm = ({handleSearchText, errorMessage}) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {setSearchText(event.target.value)};

  return <div className="search-form">
    <div id="search-input-wrapper">
      <input 
        className="search-input"
        id="location-search-input"
        type="search"
        placeholder="Find a city"
        onChange={(event) => {
          handleInputChange(event);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleSearchText(searchText);
            document.getElementById("location-search-input").value = "";
          }
        }}
      >
      </input>

      <button 
        className="search-button"
        data-testid="search-button"
        onClick={() => handleSearchText(searchText)}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
    { errorMessage && (<div className="error-message" data-testid="error-message" >
      {errorMessage}
    </div>)}
  </div>
}

SearchForm.propTypes = {
  handleSearchText: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default SearchForm;
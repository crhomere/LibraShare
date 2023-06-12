import React, { useState, useEffect } from 'react';
import { fetchBookByZipcode } from '../../features/book/bookSlice';
import GoogleMap from '../GoogleMap/Map.js';

import './SearchBar.css';

const SearchBar = ({ onZipcodeChange, onZipcodeSubmit }) => {
  const [zipCode, setZipCode] = useState('');
  const [zoom, setZoom] = useState(10);
  const [showMap, setShowMap] = useState(false);
  const [searchedZipCode, setSearchedZipCode] = useState('');

  useEffect(() => {
    if (searchedZipCode) {
      setShowMap(true);
    }
  }, [searchedZipCode]);

  const handleSearch = async (e) => {
    // Perform any necessary validation or data processing here
    // Set the searchedZipCode state after search button is pressed
    onZipcodeSubmit(e);
    setSearchedZipCode(zipCode);
  
    console.log(zipCode);
  };  

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
    onZipcodeChange(e);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSearch}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Zip code"
                  aria-label="Search"
                  value={zipCode}
                  onChange={handleInputChange}
                />
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter book title"
                  aria-label="Search"
                />
                <button className="btn search-book-btn" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        {showMap && (
          <div id="map-container" style={{ width: '100%', height: '400px' }}>
            <GoogleMap zipCode={searchedZipCode} zoom={zoom} />
          </div>
        )}
      </div>

      {/* Other search bar elements */}
    </div>
  );
};

export default SearchBar;

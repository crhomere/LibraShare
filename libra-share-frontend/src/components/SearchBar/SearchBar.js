import React, { useState } from 'react';
import GoogleMap from '../GoogleMap/Map.js';

const SearchBar = () => {
  const [zipCode, setZipCode] = useState('');
  const [zoom, setZoom] = useState(10);
  const [showMap, setShowMap] = useState(false);
  const [searchedZipCode, setSearchedZipCode] = useState('');

  const handleSearch = () => {
    // Perform any necessary validation or data processing here
    // Set the searchedZipCode state after search button is pressed
    setSearchedZipCode(zipCode);
    setShowMap(true);
  };

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div>
      <div className="container">
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
              <button className="btn search-book-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {showMap && searchedZipCode === zipCode && (
        <div id="map-container" style={{ width: '100%', height: '400px' }}>
          <GoogleMap zipCode={searchedZipCode} zoom={zoom} />
        </div>
      )}
      {/* Other search bar elements */}
    </div>
  );
};

export default SearchBar;

import React, { useEffect } from 'react';

import './SearchBar.css';

const SearchBar = () => {
  const users = [
    { id: 1, lat: 37.7749, lng: -122.4194 }, // San Francisco
    { id: 2, lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { id: 3, lat: 41.8781, lng: -87.6298 }, // Chicago
    { id: 4, lat: 29.7604, lng: -95.3698 }, // Houston
    { id: 5, lat: 39.9526, lng: -75.1652 }, // Philadelphia
    { id: 6, lat: 33.4484, lng: -112.074 }, // Phoenix
    { id: 7, lat: 32.7157, lng: -117.1611 }, // San Diego
    { id: 8, lat: 29.9511, lng: -90.0715 }, // New Orleans
    { id: 9, lat: 25.7617, lng: -80.1918 }, // Miami
    { id: 10, lat: 47.6062, lng: -122.3321 }, // Seattle
  ];

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter Zip code"
                aria-label="Search"
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
            </form>
          </div>
        </div>
      </div>

      <div id="map-container" style={{ width: '100%', height: '400px' }}></div>
      {/* Other search bar elements */}
    </div>
  );
};

export default SearchBar;

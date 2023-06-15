import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBookByZipcode } from '../../features/book/bookSlice';
import GoogleMap from '../GoogleMap/Map.js';

import './SearchBar.css';

const SearchBar = ({
  onZipcodeChange,
  onZipcodeSubmit,
  userZipcode,
  setshowMap,
  showMap,
  bookLocations,
  setBookLocations,
  distance,
  setDistance
}) => {
  const [zipCode, setZipCode] = useState('');
  const [zoom, setZoom] = useState(50);
  const [searchedZipCode, setSearchedZipCode] = useState('');
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (Array.isArray(bookLocations)) {
      console.log("Before:" + bookLocations);
      const filteredBookLocations = bookLocations.filter(
        book =>
          book.zipcode == searchedZipCode
      );
      console.log("Before:" + filteredBookLocations);
      // update the bookLocations state with the filtered array
      setBookLocations(filteredBookLocations)
    }
  }, [searchedZipCode]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform any necessary validation or data processing here
    // Set the searchedZipCode state after search button is pressed
    setSearchedZipCode(zipCode);
    onZipcodeSubmit(e);
    setshowMap(false);
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
            <GoogleMap
              zipCode={searchedZipCode || userZipcode}
              zoom={zoom}
              bookLocations={bookLocations}
              distance={distance}
              setDistance={setDistance}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

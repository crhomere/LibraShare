import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks';
import axios from 'axios';

const GoogleMap = ({ zipCode, zoom }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [mapContainer, setMapContainer] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(apiKey);
    // Fetch the latitude and longitude based on the zip code using a geocoding service
    fetchCoordinates(zipCode);
  }, [zipCode]);

  const fetchCoordinates = useCallback(async (zipCode) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`
      );
      const { lat, lng } = response.data.results[0].geometry.location;
      setCoordinates({ lat, lng });
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);

  const mapOptions = {
    center: coordinates ? coordinates : { lat: 0, lng: 0 },
    zoom: zoom,
  };

  return (
    <GoogleMapsProvider googleMapsAPIKey={apiKey} mapContainer={mapContainer} mapOptions={mapOptions}>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <React.StrictMode>
          <div ref={mapRef} style={{ height: '100%' }} />
        </React.StrictMode>
      )}
    </GoogleMapsProvider>
  );
};

export default GoogleMap;
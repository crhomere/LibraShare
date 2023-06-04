import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMapsProvider, useDistanceMatrixService } from '@ubilabs/google-maps-react-hooks';
import axios from 'axios';

const useSortedAddresses = (addresses, coordinates) => {
  const [sortedAddresses, setSortedAddresses] = useState([]);

  // Calculate the distance between each address and the specified location
  var origins = addresses.map((address) => ({ lat: address.lat, lng: address.lng }));
  var destinations = [{ lat: coordinates.lat, lng: coordinates.lng }];
  var serviceOptions = {
    origins,
    destinations,
    travelMode: 'DRIVING',
  };
  var serviceCallback = (response) => {
    if (response && response.rows) {
      var distances = response.rows.map((row, index) => ({
        address: addresses[index],
        distance: row.elements[0].distance.value,
      }));

      // Sort the addresses based on their distance from the specified location
      distances.sort(function (a, b) {
        return a.distance - b.distance;
      });

      setSortedAddresses(distances.map((item) => item.address));
    }
  };
  useDistanceMatrixService(serviceOptions, serviceCallback);

  return sortedAddresses;
};

const GoogleMap = ({ zipCode, zoom }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [mapContainer, setMapContainer] = useState(null);
  const [apiKey] = useState('API_KEY');
  const [isLoading, setIsLoading] = useState(true);
  const [addresses] = useState([
    // your list of addresses
  ]);
  const sortedAddresses = useSortedAddresses(addresses, coordinates);

  useEffect(() => {
    // Fetch the latitude and longitude based on the zip code using a geocoding service
    fetchCoordinates(zipCode);
  }, [zipCode]);

  const fetchCoordinates = useCallback(
    async (zipCode) => {
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
    },
    [apiKey]
  );

  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);

  const mapOptions = {
    center: coordinates ? coordinates : { lat: 0, lng: 0 },
    zoom: zoom,
  };

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={apiKey}
      mapContainer={mapContainer}
      mapOptions={mapOptions}
      libraries={['geometry']}
    >
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <React.StrictMode>
          <div ref={mapRef} style={{ height: '100%' }} />
          {/* Display the sorted addresses */}
          <ul>
            {sortedAddresses.map((address) => (
              <li key={address}>{address}</li>
            ))}
          </ul>
        </React.StrictMode>
      )}
    </GoogleMapsProvider>
  );
};

export default GoogleMap;

import React, { useEffect, useState } from 'react';
import { useDistanceMatrixService, useGeocodingService } from '@ubilabs/google-maps-react-hooks';
import styles from './DistanceMatrixService.css';

const DistanceMatrixService = ({ bookLocations, zipCode, distance, setDistance }) => {
  const service = useDistanceMatrixService();
  const geocoder = useGeocodingService();
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (!geocoder || !service) {
      return;
    }

    const destinations = bookLocations.map(location => location.position);

    const request = {
      origins: [zipCode],
      destinations: destinations,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
      // eslint-disable-next-line no-undef
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    };

    service.getDistanceMatrix(request, response => {
      if (!response) {
        return;
      }

      const responseElements = response.rows[0].elements;
      setDistance(responseElements);
      setElements(responseElements);
    });
  }, [Boolean(geocoder), Boolean(service)]);

  return (
    <div>
    </div>
  );
};

export default DistanceMatrixService;

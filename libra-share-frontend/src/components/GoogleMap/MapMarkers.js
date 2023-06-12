import { useState, useEffect } from 'react';
import { useGoogleMap } from '@ubilabs/google-maps-react-hooks';

const MapMarkers = ({ bookLocations }) => {
  // Get the global map instance with the useGoogleMap hook
  const map = useGoogleMap();

  const [, setMarkers] = useState([]);

  // Add markers to the map
  useEffect(() => {
    if (!map) {
      return () => {};
    }

    // eslint-disable-next-line no-undef
    const initialBounds = new google.maps.LatLngBounds();

    console.log(bookLocations)
    const bookLocationMarkers = bookLocations.map((bookLocation) => {
      const { position, name } = bookLocation;

      const markerOptions = {
        map,
        position,
        title: name,
        clickable: false,
      };

      initialBounds.extend(position);

      // eslint-disable-next-line no-undef
      return new google.maps.Marker(markerOptions);
    });

    // Set the center of the map to fit markers
    map.setCenter(initialBounds.getCenter());

    setMarkers(bookLocationMarkers);
    map.fitBounds(initialBounds);

    // Clean up markers
    return () => {
      bookLocationMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [map, bookLocations]);

  return null;
};

export default MapMarkers;
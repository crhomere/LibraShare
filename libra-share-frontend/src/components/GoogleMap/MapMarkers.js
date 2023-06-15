import { useState, useEffect } from 'react';
import { useGoogleMap } from '@ubilabs/google-maps-react-hooks';

const MapMarkers = ({ bookLocations , userLocation}) => {
  // Get the global map instance with the useGoogleMap hook
  const map = useGoogleMap();

  const [markers, setMarkers] = useState([]);
  const [infoWindows, setInfoWindows] = useState([]);

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
      };

      initialBounds.extend(position);

      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker(markerOptions);

      // Add click event listener to marker
      marker.addListener('click', () => {
        map.setCenter(position);
        map.setZoom(10);
      });

      return { marker };
    });

    // Set the center of the map to fit markers
    map.setCenter(initialBounds.getCenter());

    setMarkers((prevMarkers) => [...prevMarkers, ...bookLocationMarkers.map(({ marker }) => marker)]);
    map.fitBounds(initialBounds);

    // Add user location marker
    if (userLocation) {
      const { lat, lng } = userLocation;
      const position = { lat, lng };
      
      initialBounds.extend(position);
      
      const userMarkerOptions = {
        map,
        position,
        title: "YOU",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
          // eslint-disable-next-line no-undef
          scaledSize: new google.maps.Size(50, 50)
        },
        zIndex: 9999
      };
      
      // eslint-disable-next-line no-undef
      const userMarker = new google.maps.Marker(userMarkerOptions);
      
      // Add click event listener to userMarker
      userMarker.addListener('click', () => {
        map.setCenter(position);
        map.setZoom(10);
      });
      
      // Add InfoWindow to userMarker
      // eslint-disable-next-line no-undef
      const userInfoWindow = new google.maps.InfoWindow({
        content: `<div>YOU</div>`,
      });
      
      userInfoWindow.open(map, userMarker);
      
      setInfoWindows((prevInfoWindows) => [...prevInfoWindows, userInfoWindow]);
      
      setMarkers((prevMarkers) => [...prevMarkers, userMarker]);
      
    }

    // Clean up markers
    return () => {
      bookLocationMarkers.forEach(({ marker }) => marker.setMap(null));
      infoWindows.forEach((infoWindow) => infoWindow.close());
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [map, bookLocations]);

  // Add markers by clicking on the map
  useEffect(() => {
    if (!map) {
      return () => {};
    }

    // Add click event listener to map
    const mapClickListener = map.addListener('click', (event) => {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      // Add marker at clicked position
      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        map,
        position,
      });

      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    });

    // Clean up map click listener
    return () => {
    };
  }, [map]);

  return null;
};

export default MapMarkers;

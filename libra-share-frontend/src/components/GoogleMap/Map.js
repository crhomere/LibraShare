import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: zoom,
    };

    // Create the map instance
    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    // Create the marker
    const marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });

    // Clean up when component unmounts
    return () => {
      marker.setMap(null);
      map.setMap(null);
    };
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;

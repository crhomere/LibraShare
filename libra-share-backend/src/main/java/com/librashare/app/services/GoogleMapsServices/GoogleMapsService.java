package com.librashare.app.services.GoogleMapsServices;
import com.google.maps.DistanceMatrixApi;
import com.google.maps.GeoApiContext;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.DistanceMatrixElement;
import com.google.maps.model.DistanceMatrixElementStatus;
import com.google.maps.model.DistanceMatrixRow;
import com.google.maps.DistanceMatrixApiRequest;
import com.google.maps.model.LatLng;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GoogleMapsService {
  
  @Value("")
  private String googleMapsApiKey;

  public double calculateDistance(double sourceLatitude, double sourceLongitude, double destinationLatitude, double destinationLongitude) {
    GeoApiContext context = new GeoApiContext.Builder()
        .apiKey(googleMapsApiKey)
        .build();

    try {
      DistanceMatrixApiRequest request = DistanceMatrixApi.newRequest(context)
          .origins(new LatLng(sourceLatitude, sourceLongitude))
          .destinations(new LatLng(destinationLatitude, destinationLongitude));

      DistanceMatrix distanceMatrix = request.await();

      if (distanceMatrix.rows.length > 0) {
        DistanceMatrixRow row = distanceMatrix.rows[0];

        if (row.elements.length > 0) {
          DistanceMatrixElement element = row.elements[0];

          if (element.status == DistanceMatrixElementStatus.OK) {
            return element.distance.inMeters;
          }
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
      // Handle exception or log the error
    }

    return -1; // Return a negative value or throw an exception to indicate an error
  }
}

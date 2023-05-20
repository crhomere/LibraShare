package com.librashare.app.dtos;

import com.librashare.app.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserDto implements Serializable {
    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String addressLine;
    private String city;
    private String state;
    private String zipcode;
    private String latitude;
    private String longitude;

    public UserDto(User user) {
        if (user.getUserId() != null) {
            this.id = user.getUserId();
        }
        if (user.getUsername() != null) {
            this.username = user.getUsername();
        }
        if (user.getPassword() != null) {
            this.password = user.getPassword();
        }
        if (user.getFirstName() != null) {
            this.firstName = user.getFirstName();
        }
        if (user.getLastName() != null) {
            this.lastName = user.getLastName();
        }
        if (user.getEmail() != null) {
            this.email = user.getEmail();
        }
        if (user.getPhoneNumber() != null) {
            this.phoneNumber = user.getPhoneNumber();
        }
        if (user.getAddressLine() != null) {
            this.addressLine = user.getAddressLine();
        }
        if (user.getCity() != null) {
            this.city = user.getCity();
        }
        if (user.getState() != null) {
            this.state = user.getState();
        }
        if (user.getZipcode() != null) {
            this.zipcode = user.getZipcode();
        }
        if (user.getLatitude() != null) {
            this.latitude = user.getLatitude();
        }
        if (user.getLongitude() != null) {
            this.longitude = user.getLongitude();
        }
    }

}

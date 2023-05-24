package com.librashare.app.entities;


import com.librashare.app.dtos.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private String addressLine;
    private String city;
    private String state;
    private String zipcode;
    private String latitude;
    private String longitude;
    @Column(unique = true)
    private String username;

    public User(UserDto userDto) {
        if (userDto.getUsername() != null) {
            this.username = userDto.getUsername();
        }
        if (userDto.getPassword() != null) {
            this.password = userDto.getPassword();
        }
        if (userDto.getFirstName() != null) {
            this.firstName = userDto.getFirstName();
        }
        if (userDto.getLastName() != null) {
            this.lastName = userDto.getLastName();
        }
        if (userDto.getEmail() != null) {
            this.email = userDto.getEmail();
        }
        if (userDto.getPhoneNumber() != null) {
            this.phoneNumber = userDto.getPhoneNumber();
        }
        if (userDto.getAddressLine() != null) {
            this.addressLine = userDto.getAddressLine();
        }
        if (userDto.getCity() != null) {
            this.city = userDto.getCity();
        }
        if (userDto.getState() != null) {
            this.state = userDto.getState();
        }
        if (userDto.getZipcode() != null) {
            this.zipcode = userDto.getZipcode();
        }
        if (userDto.getLatitude() != null) {
            this.latitude = userDto.getLatitude();
        }
        if (userDto.getLongitude() != null) {
            this.longitude = userDto.getLongitude();
        }
    }
}

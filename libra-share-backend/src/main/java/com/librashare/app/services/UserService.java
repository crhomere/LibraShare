package com.librashare.app.services;

import com.librashare.app.dtos.UserDto;
import com.librashare.app.entities.User;
import com.librashare.app.repositories.UserRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public String addUser(UserDto userDto) {
        boolean userExists = userRepository
                .findByEmail(userDto.getEmail())
                .isPresent();
        boolean usernameExist = userRepository.findByUsername(userDto.getUsername()).isPresent();
        if (userExists || usernameExist) {
            if (usernameExist) {
                return "Error the username is not available.";
            } else {
                return "Error the email is not available.";
            }
        } else {
            try {
                String addressLine1 = userDto.getAddressLine().replaceAll(" ", "+");
                String addressLine2 = (userDto.getCity() + " " + userDto.getState()).replaceAll(" ", "+");

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create("http://www.yaddress.net/api/address?AddressLine1=" + addressLine1
                                + "&AddressLine2=" + addressLine2 + "&UserKey="))
                        .method("GET", HttpRequest.BodyPublishers.noBody())
                        .build();
                HttpResponse<String> jsonResponse = HttpClient.newHttpClient().send(request,
                        HttpResponse.BodyHandlers.ofString());
                JSONObject adr = new JSONObject(jsonResponse.body());
                userDto.setAddressLine(adr.getString("AddressLine1"));
                userDto.setCity(adr.getString("City"));
                userDto.setState(adr.getString("State"));
                userDto.setZipcode(adr.getString("Zip"));
                userDto.setLatitude(String.valueOf(adr.getBigDecimal("Latitude")));
                userDto.setLongitude(String.valueOf(adr.getBigDecimal("Longitude")));

                User user = new User(userDto);
                userRepository.saveAndFlush(user);
                return "http://localhost:8080/login.html";
            } catch (Exception e) {
                return "Error while saving user";
            }
        }
    }

    public List<String> userLogin(UserDto userDto) {
        List<String> response = new ArrayList<>();
        Optional<User> userOptional = userRepository.findByEmail(userDto.getEmail());

        if (userOptional.isPresent()) {
            if (passwordEncoder.matches(userDto.getPassword(), userOptional.get().getPassword())) {
                response.add("http://localhost:8080/home.html");
                response.add(String.valueOf(userOptional.get().getUserId()));
            } else {
                response.add("Username or password incorrect");
            }
        } else {
            response.add("Username or password incorrect");
        }
        return response;
    }
}

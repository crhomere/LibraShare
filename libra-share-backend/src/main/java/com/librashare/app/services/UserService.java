package com.librashare.app.services;


import com.librashare.app.dtos.UserDto;
import com.librashare.app.entities.User;
import com.librashare.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
        if (userExists) {
            return "Error the email is not available as an account is already assigned to it. Please login instead.";
        } else {
            User user = new User(userDto);
            userRepository.saveAndFlush(user);
            return "http://localhost:8080/login.html";

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

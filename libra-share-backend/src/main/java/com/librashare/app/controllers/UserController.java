package com.librashare.app.controllers;

import com.librashare.app.dtos.UserDto;
import com.librashare.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @PostMapping("/register")
    public Map<String, Object> addUser(@RequestBody UserDto userDto) {
        String passHash = passwordEncoder.encode(userDto.getPassword());
        userDto.setPassword(passHash);

        String result = userService.addUser(userDto);
        boolean success = !result.startsWith("Error");

        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", result);

        return response;
    }


    @PostMapping("/login")
    public Optional<UserDto> userLogin(@RequestBody UserDto userDto) {
        return userService.userLogin(userDto);
    }
}
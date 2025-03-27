package com.example.deutschland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.deutschland.model.User;
import com.example.deutschland.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {


    if (user.getFullName() == null || user.getFullName().trim().isEmpty()) {
        return ResponseEntity.badRequest().body("Full Name is required.");
    }
    if (user.getUserName() == null || user.getUserName().trim().isEmpty()) {
        return ResponseEntity.badRequest().body("Username is required.");
    }
    if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
        return ResponseEntity.badRequest().body("Password is required.");
    }
    if (user.getPhoneNo() == null || user.getPhoneNo().trim().isEmpty()) {
        return ResponseEntity.badRequest().body("Phone number is required.");
    }

   
    if (userRepository.findByUserName(user.getUserName()) != null) {
        return ResponseEntity.badRequest().body("Username already taken.");
    }
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    System.out.println("Saving User: " + user);
    userRepository.save(user);
    return ResponseEntity.ok().body("User registered successfully!");
}


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUserName(),
                        loginRequest.getPassword()));

        return ResponseEntity.ok().body("Login successful for user: " + authentication.getName());
    }
}

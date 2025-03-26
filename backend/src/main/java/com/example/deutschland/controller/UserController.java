package com.example.deutschland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.deutschland.model.User;
import com.example.deutschland.repository.UserRepository;
import com.example.deutschland.service.UserDetailsServiceImpl;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // User Registration
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.findByUserName(user.getUserName()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        // Encode password before saving
        user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));

        // Save the user
        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }

    // User Login Authentication
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String userName, @RequestParam String password) {
        Optional<User> userOptional = userRepository.findByUserName(userName);

        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: User not found!");
        }

        User user = userOptional.get();

        if (!passwordEncoder.matches(password, user.getUserPassword())) {
            return ResponseEntity.badRequest().body("Error: Incorrect password!");
        }

        return ResponseEntity.ok("Login successful");
    }
}

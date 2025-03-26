package com.example.deutschland.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.deutschland.model.User;
import com.example.deutschland.repository.UserRepository;

@Service
public class UserRegistrationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(String userName, String confirmPassword, String fullName, 
                             String userDesignation, Long userRole, String phoneNumber, 
                             Integer gender, String countryCode) {
        
        // Check if username already exists
        if (userRepository.findByUserName(userName).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        // Create and save the new user
        User user = new User();
        user.setUserName(userName);
        user.setUserPassword(passwordEncoder.encode(confirmPassword)); 
        user.setUserDesignation(userDesignation);
        user.setName(fullName);
        user.setFkRoleId(userRole);
        user.setPhoneNumber(phoneNumber);
        user.setGender(gender);
        user.setCountryCode(countryCode);
        
        userRepository.save(user);
    }
}

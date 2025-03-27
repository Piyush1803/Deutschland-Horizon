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

    public void registerUser(String userName, String confirmPassword, String fullName, Long userRole, String phoneNo, Integer gender) {
        if (userRepository.findByUserName(userName) != null) {
            throw new RuntimeException("Username already exists");
        }

        User user = new User();
        user.setUserName(userName);
        user.setPassword(passwordEncoder.encode(confirmPassword)); 
        user.setFullName(fullName); 
        user.setPhoneNo(phoneNo); 
        user.setGender(gender);
    
        userRepository.save(user);
    }
}

package com.example.deutschland.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.deutschland.model.User;
import com.example.deutschland.repository.UserRepository;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByUserName(userName);
        
        User user = userOptional.orElseThrow(() -> 
            new UsernameNotFoundException("User not found with username: " + username)
        );

        // Return UserDetails object with roles
        return new org.springframework.security.core.userdetails.User(
                user.getUserName(),
                user.getUserPassword(),
                user.getFkRoleId() == 1 ? 
                AuthorityUtils.createAuthorityList("ROLE_ADMIN") :
                AuthorityUtils.createAuthorityList("ROLE_USER")
        );
    }

    // Method to register a new user
    public User registerUser(User user) {
        user.setUserPassword(passwordEncoder.encode(user.getUserPassword())); // Encode password
        return userRepository.save(user);
    }
}

// package com.example.deutschland.controller;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// @RequestMapping("/api/auth")
// @CrossOrigin(origins = "http://localhost:5173")
// public class AuthController {
    

//     PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
//         if ("admin".equals(loginRequest.getUsername()) && "password".equals(loginRequest.getPassword())) {
//             return ResponseEntity.ok("{\"token\": \"fake-jwt-token-123\"}");
//         } else {
//             return ResponseEntity.status(401).body("{\"error\": \"Invalid credentials\"}");
//         }
//     }

//     static class LoginRequest {
//         public String username;
//         public String password;
//     }

// }  
    
    

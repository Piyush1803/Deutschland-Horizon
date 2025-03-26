// package com.example.deutschland.security;

// import io.jsonwebtoken.*;
// import org.springframework.security.core.Authentication;
// import org.springframework.stereotype.Component;
// import java.util.Date;

// @Component
// public class JwtUtil {
//     private final String SECRET_KEY = "your_secret_key";

//     public String generateToken(Authentication authentication) {
//         return Jwts.builder()
//                 .setSubject(authentication.getName())
//                 .setIssuedAt(new Date())
//                 .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24 hours
//                 .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
//                 .compact();
//     }

//     public String extractUsername(String token) {
//         return Jwts.parser()
//                 .setSigningKey(SECRET_KEY)
//                 .parseClaimsJws(token)
//                 .getBody()
//                 .getSubject();
//     }
// }

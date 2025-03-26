package com.example.deutschland.model;


import lombok.Data;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="full_name", unique = true, nullable = false)
    private String fullName;  

    @Column(name="phone_no", unique = true, nullable = false)
    private String phoneNo; 

    @Column(name="gender", nullable = false)
    private int gender;

    @Column(name="user_name", unique = true, nullable = false)
    private String userName;

    @Column(name = "user_password", unique = true,nullable = false)
    private String password;  

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

}

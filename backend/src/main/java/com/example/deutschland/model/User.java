package com.example.deutschland.model;

import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Setter
@Getter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("full_name") 
    @Column(name="full_name", nullable = false)
    private String fullName;

    @JsonProperty("phone_no")
    @Column(name="phone_no", nullable = false)
    private String phoneNo;

    @Column(name="gender", nullable = false)
    private int gender;

    @JsonProperty("user_name")
    @Column(name="user_name", unique = true, nullable = false)
    private String userName;

    @JsonProperty("password")
    @Column(name = "user_password", nullable = false)
    private String password;

    // @ManyToOne
    // @JoinColumn(name = "role_id")
    // private Role role;

    // @Column(name="fk_role_id")
    // private Long fkRoleId;
}

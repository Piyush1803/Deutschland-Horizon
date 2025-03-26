package com.example.deutschland.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.deutschland.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
    Role findByRoleName(String rolename);
}

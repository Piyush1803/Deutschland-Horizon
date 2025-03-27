package com.example.deutschland.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.deutschland.model.Role;
import com.example.deutschland.repository.RoleRepository;

@Service
public class RoleCreationService {

	@Autowired
	RoleRepository roleRepository;
	
	public void createRole(String rolename, String uniquecode) {
		
		Role role=new Role();
		role.setRoleName(rolename);
		role.setUniqueCode(uniquecode);
		
		roleRepository.save(role);
		
	}
	public Role updateRole(Long id, String roleName,String uniqueCode) {
        Optional<Role> role = roleRepository.findById(id);
        Role roleInfo=role.get();
        roleInfo.setRoleName(roleName);
        roleInfo.setUniqueCode(uniqueCode);
        return roleRepository.save(roleInfo);
    }	
}
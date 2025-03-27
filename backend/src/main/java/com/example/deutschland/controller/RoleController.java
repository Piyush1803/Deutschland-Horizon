package com.example.deutschland.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.ui.Model;

import com.example.deutschland.model.Role;
import com.example.deutschland.repository.RoleRepository;
import com.example.deutschland.service.RoleCreationService;


@Controller
public class RoleController {

	@Autowired
	RoleCreationService roleCreationService;
	
	
	@Autowired
	RoleRepository roleRepository;
	
	// Page Load Add Role
	@GetMapping("/createRoleApi")
	public String role() {
		return "addRole";
	}
	
	// Submit Form Add Role
	@PostMapping("/createrole")
    public String roleUser(@Validated
        @RequestParam("rolename") String rolename,
        @RequestParam("uniquecode") String uniquecode, RedirectAttributes redirectAttributes) throws Exception
    {  
		redirectAttributes.addFlashAttribute("message", "Create successfully");
		roleCreationService.createRole(rolename, uniquecode);
    	
        return "redirect:/createRoleApi";
    }


    // Role List Page Load
	@GetMapping("/roleList")
	public String getRoleList( Model model)
	{
		List<Role> rolelistList=roleRepository.findAll();
		model.addAttribute("roleList",rolelistList);
		return "roleList";
	}
	
	// Edit page load
	@GetMapping("/editRoleApi/{id}")
	public String editRole(@PathVariable("id") Long id,Model model){	
	Optional<Role> role=	roleRepository.findById(id);
	Role roleInfo= role.get();
		model.addAttribute("roleInfo", roleInfo);
		return "editRole";
	}
	
	// Update page posst
	 @PostMapping("/updateRole/{id}")
	 public String updateRole(@PathVariable("id") Long id,@RequestParam("roleName") String roleName,@RequestParam("uniqueCode")String uniqueCode, Model model)
	 {
		 roleCreationService.updateRole(id,roleName,uniqueCode);
		 model.addAttribute("message", "Updated Successfully");
		 return "redirect:/roleList";
	 }
}
	

package com.example.deutschland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.deutschland.model.Appointment;
import com.example.deutschland.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173") 
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;
    
    // Endpoint for booking an appointment
    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        return appointmentService.saveAppointment(appointment);
    }

    // Endpoint for retrieving all appointments
    @GetMapping
    public List<Appointment> getAppointments() {
        return appointmentService.getAllAppointments();
    }
}

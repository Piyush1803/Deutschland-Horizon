package com.example.deutschland.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.deutschland.model.Appointment;
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
    
}

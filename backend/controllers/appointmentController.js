import {
    getAvailableDates,
    getAvailableSlots,
    bookAppointment,
    getAppointmentById
  } from "../models/appointmentModel.js";
  
  import { createGoogleCalendarEvent } from "../services/googleCalendarService.js";
  
  // GET /api/appointments/available-dates
  export const fetchAvailableDates = (req, res) => {
    getAvailableDates((err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });
      const dates = results.map(row => row.date);
      res.json(dates);
    });
  };
  
  // GET /api/appointments/available?date=YYYY-MM-DD
  export const fetchAvailableSlots = (req, res) => {
    const { date } = req.query;
    getAvailableSlots(date, (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json(results);
    });
  };
  
  // POST /api/appointments/book
  export const handleBookAppointment = (req, res) => {
    const { id, name, email } = req.body;
  
    // Update appointment in DB
    bookAppointment({ id, name, email }, (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
  
      if (result.affectedRows === 0) {
        return res.status(400).json({ message: "Slot already booked" });
      }
  
      // Fetch appointment details for Google Calendar
      getAppointmentById(id, async (err, rows) => {
        if (err) return res.status(500).json({ error: "Failed to fetch appointment details" });
  
        const appointment = rows[0];
  
        // Add to Google Calendar
        try {
          const calendarEvent = await createGoogleCalendarEvent(appointment);
          res.status(201).json({
            message: "Appointment booked successfully!",
            eventLink: calendarEvent.htmlLink
          });
        } catch (error) {
          res.status(500).json({ error: "Failed to add to Google Calendar" });
        }
      });
    });
  };
  
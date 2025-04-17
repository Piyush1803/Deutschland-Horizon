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
  
  export const handleBookAppointment = (req, res) => {
    const { id, name, email } = req.body;
  
    // Validate input data
    if (!id || !name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    console.log('Booking appointment with:', id, name, email);
  
    // Update appointment in DB
    bookAppointment({ id, name, email }, (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: "Database error" });
      }
  
      console.log('Database result:', result);
  
      if (result.affectedRows === 0) {
        return res.status(400).json({ message: "Slot already booked" });
      }
  
      // Fetch appointment details for Google Calendar
      getAppointmentById(id, async (err, rows) => {
        if (err) {
          console.error('Failed to fetch appointment details:', err);
          return res.status(500).json({ error: "Failed to fetch appointment details" });
        }
  
        const appointment = rows[0];
        console.log('Appointment details:', appointment);
  
        // Add to Google Calendar
        try {
          const calendarEvent = await createGoogleCalendarEvent(appointment);
          res.status(201).json({
            message: "Appointment booked successfully!",
            eventLink: calendarEvent.htmlLink
          });
        } catch (error) {
          console.error('Failed to create Google Calendar event:', error);
          res.status(500).json({ error: "Failed to add to Google Calendar" });
        }
      });
    });
  };
  
  
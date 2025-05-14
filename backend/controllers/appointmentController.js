import {
  getAvailableDates,
  getAvailableSlots,
  bookAppointment,
  getAppointmentById
} from "../models/appointmentModel.js";
import { sendMeetingEmail } from "../services/mailService.js";
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

  console.log('Request Body:', req.body);

  if (!id || !name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log('Booking appointment with:', id, name, email);

  bookAppointment({ id, name, email }, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    getAppointmentById(id, async (err, rows) => {
      if (err) {
        console.error('Failed to fetch appointment details:', err);
        return res.status(500).json({ error: "Failed to fetch appointment details" });
      }

      const appointment = rows[0];
      console.log('Appointment details:', appointment);

      try {
        // Create Google Calendar Event with Meet link
        const calendarEvent = await createGoogleCalendarEvent(appointment);
        console.log('Calendar event created:', calendarEvent);

        // ✅ Extract Google Meet link safely
        const meetLink = calendarEvent.conferenceData?.entryPoints?.find(
          entry => entry.entryPointType === "video"
        )?.uri || "Link not available";

        // Format the appointment date
        const date = new Date(appointment.start_time).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata"
        });

        // Prepare email content
        const userEmailBody = `
Dear ${appointment.name},

Your appointment is confirmed!

📅 Date & Time: ${date}
📞 Google Meet Link: ${meetLink}

See you then!

Regards,  
Deutschland Horizon
        `;

        const adminEmailBody = `
📢 New Appointment Booked!

👤 Name: ${appointment.name}
📧 Email: ${appointment.email}
📅 Date & Time: ${date}
📞 Google Meet Link: ${meetLink}
        `;

        // Send confirmation email to user
        await sendMeetingEmail({
          to: appointment.email,
          subject: "Your Appointment Confirmation",
          text: userEmailBody
        });

        // Send notification to admin
        await sendMeetingEmail({
          to: "germanysoon0@gmail.com",
          subject: "New Appointment Booked",
          text: adminEmailBody
        });

        res.status(201).json({
          message: "Appointment booked successfully!",
          eventLink: calendarEvent.htmlLink
        });

      } catch (error) {
        console.error('Failed to create Google Calendar event or send emails:', error);
        res.status(500).json({ error: "Failed to complete appointment booking" });
      }
    });
  });
};

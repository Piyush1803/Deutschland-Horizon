import db from "../config/db.js";

// Get all available dates (where at least one slot is not booked)
export const getAvailableDates = (callback) => {
  const query = `
    SELECT DISTINCT DATE(start_time) as date
    FROM appointments
    WHERE is_booked = FALSE
  `;
  db.query(query, callback);
};

// Get available slots for a specific date
export const getAvailableSlots = (date, callback) => {
  const query = `
    SELECT id, TIME(start_time) as startTime
    FROM appointments
    WHERE DATE(start_time) = ? AND is_booked = FALSE
  `;
  db.query(query, [date], callback);
};

// Book an appointment slot by ID and update name/email/is_booked
export const bookAppointment = (appointmentData, callback) => {
    const query = `
    UPDATE appointments
    SET name = ?, email = ?, is_booked = TRUE, end_time = start_time + INTERVAL 3 HOUR
    WHERE id = ? AND is_booked = FALSE
  `;
  const { name, email, id } = appointmentData;
  db.query(query, [name, email, id], callback);
};

// Get appointment details by ID (for Google Calendar)
export const getAppointmentById = (id, callback) => {
  const query = `
    SELECT * FROM appointments WHERE id = ?
  `;
  db.query(query, [id], callback);
};
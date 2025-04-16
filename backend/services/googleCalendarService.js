import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;
const CALENDAR_ID = process.env.CALENDAR_ID;

export const createGoogleCalendarEvent = async (appointment) => {
  const event = {
    summary: `Appointment with ${appointment.name}`,
    description: `Contact Email: ${appointment.email}`,
    start: {
      dateTime: appointment.start_time,
      timeZone: "Asia/Kolkata"
    },
    end: {
      dateTime: appointment.end_time,
      timeZone: "Asia/Kolkata"
    }
  };

  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

  const response = await axios.post(url, event, {
    headers: { "Content-Type": "application/json" }
  });

  return response.data;
};

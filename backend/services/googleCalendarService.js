import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load service account credentials
const keyPath = path.join(__dirname, "../config/google-service-account.json");

const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  

// Initialize Calendar API
const calendar = google.calendar({ version: "v3", auth });

// Google Calendar ID
const calendarId = "germanysoon0@gmail.com"; 
// Or your custom calendar ID like: "your_calendar_id@group.calendar.google.com"

// Function to create an event
export async function createGoogleCalendarEvent(appointment) {
  const startTime = new Date(appointment.start_time);
  const endTime = new Date(startTime.getTime() + 3 * 60 * 60 * 1000);

  const event = {
    summary: `Appointment with ${appointment.name}`,
    description: `Email: ${appointment.email}`,
    start: {
      dateTime: appointment.start_time,
      timeZone: "Asia/Kolkata",
    },
    end: {
      dateTime: appointment.end_time,
      timeZone: "Asia/Kolkata",
    },
  };

  const response = await calendar.events.insert({
    calendarId,
    resource: event,
    sendUpdates: "all", // optional
  });

  return response.data;
}

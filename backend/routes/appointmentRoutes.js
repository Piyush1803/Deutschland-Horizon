import express from "express";
import {
  fetchAvailableDates,
  fetchAvailableSlots,
  handleBookAppointment
} from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/available-dates", fetchAvailableDates);
router.get("/available", fetchAvailableSlots);
router.post("/book", handleBookAppointment);

export default router;




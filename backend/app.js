import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/appointments", appointmentRoutes);

// Start server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

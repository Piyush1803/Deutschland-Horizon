// routes/payment.js
import express from "express";
import {
  createCheckoutSession,
  handleStripeWebhook,
} from "../controllers/paymentController.js"

const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);
router.post("/webhook", handleStripeWebhook);

export default router;
 
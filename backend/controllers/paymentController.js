// controllers/paymentController.js
import Stripe from "stripe";
import db from "../config/db.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  const { name, email, slotId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: "Appointment Booking",
          },
          unit_amount: 500, // $5
        },
        quantity: 1,
      }],
      mode: "payment",
      customer_email: email,
      success_url: `http://localhost:5173/success?payment=success`,
      cancel_url: `http://localhost:5173/cancel`,
      metadata: { name, email, slotId }
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Stripe session failed" });
  }
};

export const handleStripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { name, email, slotId } = session.metadata;

    const query = `
      INSERT INTO appointments (name, email, slot_id, start_time, end_time)
      SELECT ?, ?, id, start_time, DATE_ADD(start_time, INTERVAL 3 HOUR)
      FROM slots WHERE id = ? AND is_booked = FALSE
    `;

    db.query(query, [name, email, slotId], (err, result) => {
      if (err) {
        console.error("DB error during appointment booking:", err);
      } else if (result.affectedRows > 0) {
        db.query("UPDATE slots SET is_booked = TRUE WHERE id = ?", [slotId]);
        console.log("✅ Appointment booked after payment for", name);
      } else {
        console.warn("⚠️ Slot already booked or not found:", slotId);
      }
    });
  }

  res.status(200).json({ received: true });
};

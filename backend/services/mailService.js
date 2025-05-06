import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "germanysoon0@gmail.com", // your Gmail
    pass: "bnui qpdm cvxs crxk"     // App password (not your Gmail password)
  }
});

export async function sendMeetingEmail({ to, subject, text }) {
  const mailOptions = {
    from: '"Deutschland Horizon" <germanysoon0@gmail.com>',
    to,
    subject,
    text
  };

  await transporter.sendMail(mailOptions);
}

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "piyushdhanwal2003@gmail.com", // your Gmail
    pass: "bnui qpdm cvxs crxk"     // App password (not your Gmail password)
  }
});

export async function sendMeetingEmail({ to, subject, text }) {x
  const mailOptions = {
    from: '"Deutschland Horizon" <piyushdhanwal2003@gmail.com>',
    to,
    subject,
    text
  };

  await transporter.sendMail(mailOptions);
}

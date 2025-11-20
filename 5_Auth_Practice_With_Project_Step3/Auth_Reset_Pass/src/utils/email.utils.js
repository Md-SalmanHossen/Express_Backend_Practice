import nodemailer from "nodemailer";

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.MAIL_ID,
      to,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.log("Email send failed:", error.message);
    return { success: false, error: error.message };
  }
};

export default sendEmail;

import httpStatus from "http-status";
import nodemailer from "nodemailer";
import AppError from "./AppError";
import config from "../config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.smtp_email,
    pass: config.smtp_pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
interface EmailResponseOptions {
  to: string;
  subject: string;
  html: string;
}
const sendEmailResponse = async (options: EmailResponseOptions) => {
  try {
    await transporter.sendMail({
      from: config.smtp_email,
      to: options.to,
      subject: options.subject,
      //   text: message,
      html: options.html,
    });
  } catch (error: any) {
    throw new AppError(httpStatus.BAD_REQUEST, error.message);
  }
};

export default sendEmailResponse;

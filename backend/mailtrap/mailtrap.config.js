// mailtrap.config.js
import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_API_TOKEN,
  })
);

export default transport;

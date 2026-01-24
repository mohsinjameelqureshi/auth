// email.service.js
import transport from "../mailtrap/mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken, name) => {
  return transport.sendMail({
    from: {
      address: "noreply@mohsinjameel.dev",
      name: "NodeJs Auth",
    },
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{verificationCode}}", verificationToken),
  });
};

export const sendWelcomeEmail = async (email, name) => {
  return transport.sendMail({
    from: {
      address: "noreply@mohsinjameel.dev",
      name: "NodeJs Auth",
    },
    to: email,
    subject: "Welcome to NodeJs Auth",
    html: WELCOME_TEMPLATE.replace("{{name}}", name).replace(
      "{{email}}",
      email
    ),
  });
};
export const sendPasswordResetEmail = async (email, name, resetURL) => {
  return transport.sendMail({
    from: {
      address: "noreply@mohsinjameel.dev",
      name: "NodeJs Auth",
    },
    to: email,
    subject: "Reset Your Password - NodeJs Auth",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(/{{name}}/g, name)
      .replace(/{{resetURL}}/g, resetURL)
      .replace(/{{email}}/g, email),
  });
};
export const sendPasswordResetSuccessEmail = async (email, name) => {
  return transport.sendMail({
    from: {
      address: "noreply@mohsinjameel.dev",
      name: "NodeJs Auth",
    },
    to: email,
    subject: "Password Reset Successful - NodeJs Auth",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace(/{{name}}/g, name).replace(
      /{{email}}/g,
      email
    ),
  });
};

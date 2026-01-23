// email.service.js
import transport from "../mailtrap/mailtrap.config.js";
import {
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

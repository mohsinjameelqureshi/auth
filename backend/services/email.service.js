// email.service.js
import transport from "../mailtrap/mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  return transport.sendMail({
    from: {
      address: "verification@mohsinjameel.dev",
      name: "Mohsin Jameel",
    },
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
  });
};

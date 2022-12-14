import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {createTransport} from "nodemailer";
import * as dotenv from "dotenv";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp();
dotenv.config();

export const transporter = createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: "adedigbaadedotunemmanuel@gmail.com",
    pass: "881af7050a34e0",
  },
});

export const emailSender = functions.https.onRequest((req, res) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  // response.send("Hello from Firebase!");

  const mailOptions: object = {
    from: "adedigbaadedotunemmanuel@gmail.com",
    to: "adedigbaadedotunemmanuel@gmail.com",
    subject: "Email sent via firebase",
    html: "<b>Welcome to brimble sent via firebase</b>",
  };

  return transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return res.send(err.toString());
    }
    return res.send("Email sent successfully");
  });
});

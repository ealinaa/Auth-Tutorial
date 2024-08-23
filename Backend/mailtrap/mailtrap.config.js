import { MailtrapClient } from "mailtrap";

import dotenv from "dotenv"
dotenv.config()



export const mailtrapClient = new MailtrapClient({ endpoint:  process .env.MAIL_TRAP_ENDPOINT, token: process.env.MAIL_TRAP_TOKEN, });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Alina Adhikari",
};
// const recipients = [
//   {
//     email: "077bcsit006.alina@scst.edu.np",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);


import {VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]
    try {
       const response = await mailtrapClient.send({
        from:sender,
        to: recipient,
        subject: "verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        category: "Email Verification",

       })
       console.log("Email Sent Successfully", response)

    } catch (error){
        console.error(`Error Sending Verification`,error)
        throw new Error(`Error sending verification email: ${error}`)

    }

}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}]
    try {
      const response =  await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "6109cfb7-87f3-4a42-a083-038746b0e91b",
            template_variables: {
                "company_info_name": "Auth Company",
                "name": name
    
            }
        })
        console.log("welcome email sent successfully", response)

    } catch (error) {
        console.log(`Error Sending Welcome email`, error)
        throw new Error (`Error sending welcome email: ${error}`)

    }


}
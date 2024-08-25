import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
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

export const sendPasswordResetEmail = async(email, resetURL) => {
    const recipient = [{email}]
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category: "Password Reset"
        })
        console.log("Password reset email sent successfully: ", response)


    }catch (error) {
        console.log(`Error sending password reset email`, error)
        throw new Error(`Error sending password reset email: ${error}`)

    }
}
export const sendResetSuccessEmail = async(email) => {
    const recipient = [{ email }]
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to:recipient,
            subject:"Password Reset Successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        })
        console.log("Password reset email sent successfully: ", response)

    }catch(error) {
        console.error(`Error sending password reset success email`, error)
        throw new Error(`Error sending password reset success email: ${error}`)

    }

}
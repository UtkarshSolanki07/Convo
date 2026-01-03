import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";
import { ENV } from "../lib/env.js";
export const sendWelcomeEmail = async (toEmail, name, clientURL) => {
    const fromAddress = (sender && sender.name) ? `${sender.name} <${sender.email}>` : ((sender && sender.email) || "onboarding@resend.dev");
    const siteURL = clientURL || ENV.CLIENT_URL;
    if (!siteURL) {
        throw new Error("CLIENT_URL is not set in environment and no URL was provided to sendWelcomeEmail");
    }
    const {data,error} = await resendClient.emails.send({
        from: fromAddress,
        to:toEmail,
        subject:"Welcome to Convo! 🎉",
        html:createWelcomeEmailTemplate(name, siteURL)
    });   
    if(error){
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }
    console.log("Welcome Email Sent Successfully", data)
}    
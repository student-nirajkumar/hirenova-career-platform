import nodemailer from "nodemailer";

export const sendEmailVerification = async (email, token) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

      const verifyLink = `https://hirenova-career-platform-1.onrender.com/api/v1/user/verify-email/${token}`;

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verify Your Email",
            html: `
                <h2>Email Verification</h2>
                <p>Please verify your email before logging in.</p>
                <a href="${verifyLink}">Verify Email</a>
                <p>This link is valid for 24 hours.</p>
            `
        });

        console.log("✅ Email sent");

    } catch (error) {
        console.log("❌ Email verification error:", error);
    }
};
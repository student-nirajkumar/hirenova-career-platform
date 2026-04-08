import nodemailer from "nodemailer";

export const sendResetPasswordEmail = async (email, token) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const resetLink = `http://localhost:8000/api/v1/user/reset-password/${token}`;

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Reset Your Password",
            html: `
                <h2>Password Reset</h2>
                <p>Click the link below to reset your password:</p>
                <a href="${resetLink}">Reset Password</a>
                <p>This link is valid for 15 minutes.</p>
            `
        });

        console.log("✅ Reset email sent");

    } catch (error) {
        console.log("❌ Error sending reset password email:", error);
    }
};
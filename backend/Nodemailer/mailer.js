import nodemailer from 'nodemailer';

export const sendEmail = async (mailOptions) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })

        let info = await transporter.sendMail(mailOptions);

        return info;
    }
    catch (error) {
        console.log(error.message);
    }
}
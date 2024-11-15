import contact from "../models/contact.js";
import { sendEmail } from "../Nodemailer/mailer.js";
export const contactPage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new contact({
            name, email, message
        });
        await newContact.save();

        const mailOptions = {
            from: email,
            to: "pravendrajain21@gmail.com",
            subject: 'New Contact Form Submission',
            html: ` You have new contact form submission from ${name}.\n\n Message:${message}\n\n Email:${email}`,

        };

        await sendEmail(mailOptions);
        res.status(200).json({ message: "mail send successfully" });


    }
    catch (error) {
        res.status(400).json({
            message: "technical internal error"
        });
    }
}
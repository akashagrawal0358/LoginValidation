const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

// Use to get data of .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("server")
})




const transporter = nodemailer.createTransport({

    // For Using Ethereal email to check all the mails 
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'gina27@ethereal.email',
        pass: 'zuMByYBGAMrnJpUGDx',
    }
})

app.post('/register', (req, res) => {

    // Generate Random string of 6 lettter
    const otp = randomstring.generate(6);

    // Requesting name and email of user
    const { name, email } = req.body;

    const mailOptions = {
        from: "'akash' <silva12akash@gmail.com>'",
        to: email,
        body: 'OTP Verification',
        html: `<h3> Hello, ${name}... </h3> <br> Your OTP for email verification is: ${otp}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send OTP.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'OTP sent successfully.' });
        }
    });

})































app.listen(PORT, () => {
    console.log(`Server Listening on Port : ${PORT}`);
})
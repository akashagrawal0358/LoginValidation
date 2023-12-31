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

    // For Using Gmail to send and receive mails
    service: 'Gmail',
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    }
})



// Now, Can be access in any route
let otp;

// --------------------- Registration of User -------------------------


app.post('/register', (req, res) => {

    // Generate Random string of 6 lettter
    otp = randomstring.generate(6);
    //console.log(otp);

    // Requesting name and email of user
    const { name, email } = req.body;

    const mailOptions = {
        // silva12akash@gmail.com , this gmail is used to send mail to user's gmail
        from: "silva12akash@gmail.com",
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




// ---------------------- OTP-Verification ------------------------------------



app.post('/otp-verification', (req, res) => {
    const { verifyOTP } = req.body;
    console.log(verifyOTP);
    console.log(otp);

    if (verifyOTP && verifyOTP.trim() === otp) {
        res.json({ message: "OTP matched Successsfully" });
    }
    else {
        console.log("OTP not matched");
        res.json({ message: "OTP not matched.." });
    }
});


















app.listen(PORT, () => {
    console.log(`Server Listening on Port : ${PORT}`);
})
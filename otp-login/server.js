const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let savedOTP = "";
let savedEmail = "";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "st2663899@gmail.com",
        pass: "zqxxkfqnkkbrzkzf"
    }
});

// Send OTP
app.post("/send", async (req, res) => {

    const email = req.body.email;

    savedEmail = email;
    savedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    await transporter.sendMail({
        from: "st2663899@gmail.com",
        to: email,
        subject: "OTP",
        text: "Your OTP is " + savedOTP
    });

    res.send("OTP Sent");
});

// Verify OTP
app.post("/verify", (req, res) => {

    if (
        req.body.email == savedEmail &&
        req.body.otp == savedOTP
    ) {
        res.send("Success");
    } else {
        res.send("Wrong OTP");
    }

});

app.listen(3000, () => {
    console.log("Server Started");
});
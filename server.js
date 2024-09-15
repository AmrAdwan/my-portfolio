const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(cors());
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../src")));
app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "amr.work1@outlook.com",
    pass: "Password",
  },
});

app.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: '"Contact Form" <amr.work1@outlook.com>',
    to: "amr.work1@outlook.com",
    subject: `${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email successfully sent");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://213.193.241.123/:${port}`);
});

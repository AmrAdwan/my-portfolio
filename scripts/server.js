const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const corsOptions = {
  origin: "http://213.193.241.123", // Update this to the actual origin
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

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
      console.log("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email successfully sent");
  });
});

// Listen on port 8080 instead of 80
app.listen(8080, () => {
  console.log(`Server running at http://213.193.241.123:8080`);
});

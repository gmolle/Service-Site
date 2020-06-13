const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Status: Running");
});

app.post("/api/email", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "gmolle1498@gmail.com",
    subject: data.subject,
    html: `
      <h3>Information</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
      </ul>

      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
  });

  smtpTransport.close();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

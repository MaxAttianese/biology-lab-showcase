const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 8080;
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-HEADERS", "Content-Type");
  res.setHeader("Content-Type", "application/json");
  next();
});

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/invio-email", (req, res, next) => {
  const { email, subject, text } = req.body;
  let mail = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `${email} - ${subject}`,
    html: `${text} <br/> <a href="mailto:${email}?subject=RE:%20${subject}">Rispondi</a>`,
  };
  console.log(mail);
  send(mail)
  res.send("Ok");
});

function send(mail) {
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      return console.log("Si è verificato un errore", err);
    }
    console.log("Messaggio inviato con successo", info.messageId);
  });
}

app.listen(port, () => {
  console.log(`Il server è online su http://localhost:${port}/`);
});

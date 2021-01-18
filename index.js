const express = require("express");

const bodyParser = require("body-parser");

const translate = require("google-translate-api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get("/speechtranslator", (req, res) => {
  res.render("speechtranslator", {
    title: "Speech Translator Online to Multiple Languages - Free Media Tools",
    translated: "",
  });
});

app.post("/speechtranslator", (req, res) => {
  console.log(req.body.speech);

  translate(req.body.speech, { to: req.body.language })
    .then((response) => {
      res.render("speechtranslator", {
        title:
          "Speech Translator Online to Multiple Languages - Free Media Tools",
        translated: response.text,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});

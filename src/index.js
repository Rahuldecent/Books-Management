const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer")
const { AppConfig } = require('aws-sdk');

const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());


mongoose.connect("mongodb+srv://tusharbarai1:Tb88774411@cluster0.3hlrc.mongodb.net/group52Database",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});

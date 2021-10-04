// Env Variables and server config
const envVar = require("dotenv");
const mockAPIResponse = require("./mockAPI.js");

// server instance
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/public"));
//middleware config bodyparser
const bodyParser = require("body-parser");
//app.use(bodyParser()); this is depricated
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
//path
const path = require("path");

//the static directory of express
app.use(express.static("dist"));

// Add configuration to env
envVar.config();

//fetch
const { default: axios } = require("axios");
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/NLP", async function (req, res) {
  const url = req.body.url;
  //console.log("inputURL=", url);
  const completeFetchUrl = process.env.API_URL_Key + `&url=${url}&lang=en`;
  const response = await axios.post(completeFetchUrl);
  //console.log("....................................", response.data);
  res.send(response.data);
});

//port
const ServerPort = 8081;
app.listen(ServerPort, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${ServerPort}!`);
});

module.exports = { app };

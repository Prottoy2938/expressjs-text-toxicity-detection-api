const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("@tensorflow/tfjs-node");
const toxicity = require("@tensorflow-models/toxicity");

require("dotenv").config();

const middlewares = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

const runtimeOpts = {
  timeoutSeconds: 100,
  memory: "2GB",
};

const threshold = 0.9;
let model;
// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
const loadModel = async () => {
  model = await toxicity.load(threshold);
  console.log("Model Loaded");
};
loadModel();

// build multiple CRUD interfaces:
app.get("/", (req, res) => res.send("Nothing here!"));

app.post("/", (req, res) => {
  const { text } = req.body;

  model
    .classify(translatedData.text)
    .then((text) => {
      console.log(text);
      res.send({ result: text });
    })
    .catch((e) => {
      console.error(e);
      res.status(404).send("Something went wrong");
    });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

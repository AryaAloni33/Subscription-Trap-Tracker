const express = require("express");
const cors = require("cors");

const subscriptionRoutes = require("./src/routes/subscriptionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", subscriptionRoutes);

module.exports = app;

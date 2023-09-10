const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 8000;
const ApiRoutes = require("./src/routes/allroutes");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started listening at ${PORT}`);
  });
};

setupAndStartServer();

// EXTERNAL IMPORT
const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

// INTERNAL IMPORT
const routes = require("./routes");

// PORT
const PORT = process.env.PORT || 4000;
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Users Routes
app.use("/users", routes.user);
app.use("/tasks", routes.task);
app.use("/auth", routes.auth);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

// connection
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

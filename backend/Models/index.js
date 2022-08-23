// MODELS AND DATABASE CONNECTION

const mongoose = require("mongoose");
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/tasks-db";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Mongodb connected");
  })
  .catch(function (error) {
    console.log("Mongodb connection error", error);
  });

mongoose.connection.on("disconnected", function (event) {
  console.log("mongodb disconnected", event);
});

module.exports = {
  User: require("./User.js"),
  Task: require("./Task.js"),
};

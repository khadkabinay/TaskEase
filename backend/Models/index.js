// MODELS AND DATABASE CONNECTION

const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/tasks-db";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true,
});

// mongoose.connection.on("connected", () => {
//   console.log(`mongoose connected to ${connectionString}`);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log(`mongoose disconnected`);
// });

// mongoose.connection.on("error", () => {
//   console.log(`mongoose error: ${error}`);
// });

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
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

const mongoose = require("mongoose");

//SCHEMA
const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a Task."] },
    date: { type: Date, required: true, default: Date.now },
    isCompleted: { type: Boolean },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

//MODEL
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

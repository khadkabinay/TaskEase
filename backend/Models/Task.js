const mongoose = require("mongoose");

//SCHEMA
const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a Task."] },
    date: { type: Date, default: Date.now },
    isCompleted: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

//MODEL
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

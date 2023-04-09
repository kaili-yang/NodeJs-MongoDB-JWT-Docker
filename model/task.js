const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  content: { type: String, default: null },
  status: { type: Number, default: 0 }, // 0: todo, 1: in progress, 2: done
  description: { type: String, unique: true },
  token: { type: String },
});

module.exports = mongoose.model("task", taskSchema);
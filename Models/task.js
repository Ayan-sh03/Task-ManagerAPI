const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide an name"],
    trime: true,
    maxlength: [20, "name cannot be more than 20 characters"]
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);

const { default: mongoose, model } = require("mongoose");
const userSchema = new mongoose.Schema({
  TaskId: {
    type: Number,
  },
  Task: {
    type: String,
  },
  Description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "process"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const users = mongoose.model("users", userSchema);
mongoose
  .connect("mongodb://127.0.0.1:27017/AzguardsDB")
  .then((req, res) => {
    console.log("Mongoose is Connected");
  })
  .catch((req, res) => {
    console.log("Mongoose is Disconnect");
  });

module.exports = users;

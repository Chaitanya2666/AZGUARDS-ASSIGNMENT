const express = require("express");
const Router = express.Router();

const {
  handlePostData,
  handleGetData,
  handleGetbyidData,
  handleUpdatebyidData,
  handleDeletebyidData,
  handleGetbyStatusData,
} = require("../controller/index");

Router.post("/todos", handlePostData);
Router.get("/todos", handleGetData);
Router.get("/todos/:TaskId", handleGetbyidData);
Router.put("/todos/:TaskId", handleUpdatebyidData);
Router.delete("/todos/:TaskId", handleDeletebyidData);
Router.get("/todos/status/:status", handleGetbyStatusData);

module.exports = Router;

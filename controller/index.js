const users = require("../model/index");

const handlePostData = async (req, res) => {
  try {
    const body = req.body;
    if (!body || !body.TaskId || !body.Task || !body.Description) {
      return res.status(400).json({
        msg: "All Field(TaskId,Task,Description,status) are Required ",
      });
    }

    const data = await users.create({
      TaskId: body.TaskId,
      Task: body.Task,
      Description: body.Description,
      status: body.status,
    });
    return res.status(200).json({ msg: "success" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const handleGetData = async (req, res) => {
  try {
    const data = await users.find({});
    return res.status(200).send(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const handleGetbyidData = async (req, res) => {
  try {
    const body = req.params.TaskId;
    const data = await users.findOne({ TaskId: body });
    return res.status(200).send(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
const handleUpdatebyidData = async (req, res) => {
  try {
    const body = req.params.TaskId;
    const data = await users.findOneAndUpdate(
      { TaskId: body },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send({ msg: "success" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const handleDeletebyidData = async (req, res) => {
  try {
    const body = req.params.TaskId;
    const data = await users.findOneAndDelete({ TaskId: body });
    return res.status(200).json({ msg: "success" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const handleGetbyStatusData = async (req, res) => {
  try {
    const status = req.params.status;
    const data = await users.find({ status: status });
    res.send(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
module.exports = {
  handlePostData,
  handleGetData,
  handleGetbyidData,
  handleUpdatebyidData,
  handleDeletebyidData,
  handleGetbyStatusData,
};

const express = require("express");
const users = require("./model/index");
const app = express();
app.use(express.json());
const Route = require("./routes/index");
const path = require("path");
const multer = require("multer");
const { Parser, parse } = require("json2csv");
const fs = require("fs");
PORT = 7000;

// this is Multer code to uplode CSV or Any File...............

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/todos/upload", (req, res) => {
  return res.render("home");
});

app.post("/upload", upload.single("uplodeFile"), (req, res) => {
  const data = "Data Adeed Suceesfully  ";
  res.send(data);
});

//this is Json2csv code to downlode csv file ...........

app.get("/todos/download", async (req, res) => {
  const data = await users.find({});
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(data);
  fs.writeFile("data.csv", csv, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.attachment("data.csv");
  res.status(200).send(csv);
});

app.use("/", Route);

app.listen(PORT, (req, res) => {
  console.log(`App is running on PORT:${PORT}`);
});

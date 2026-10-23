const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json()); //middleware

app.post("/notes", async (req, res) => {
  const data = req.body; /*{title,description} */

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note Created",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); //[]
    /*
    find() => [{},{}] or []
    findOne() => {} or null
    */
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

module.exports = app;

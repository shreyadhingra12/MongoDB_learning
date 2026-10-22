const mongoose = require("mongoose");
//userSchema defines the structure of the user data.
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel
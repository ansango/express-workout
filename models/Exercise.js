const mongoose = require("mongoose");
const schema = require("./schemas/ExerciseSchema");

const ExerciseSchema = new mongoose.Schema(schema, { timestamps: true });

module.exports = mongoose.model("Exercise", ExerciseSchema);

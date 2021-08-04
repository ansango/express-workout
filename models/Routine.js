const mongoose = require("mongoose");
const schema = require("./schemas/RoutineSchema");

const RoutineSchema = new mongoose.Schema(schema, { timestamps: true });

module.exports = mongoose.model("Routine", RoutineSchema);

const mongoose = require("mongoose");
const schema = require("./schemas/UserSchema");

const UserSchema = new mongoose.Schema(schema, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

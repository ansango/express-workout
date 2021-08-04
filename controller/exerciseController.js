const response = require("../lib/response");

const Exercise = require("../models/Exercise");

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    if (exercises.length !== 0) {
      response.success(res, exercises);
    } else {
      response.notfound(res);
    }
  } catch (err) {
    response.error(err);
  }
};

const createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({ name: req.body.name });
    if (!exercise) {
      const newExercise = new Exercise(req.body);
      const savedExercise = await newExercise.save();
      response.success(res, savedExercise);
    } else {
      response.badrequest(res, "exercise already exists");
    }
  } catch (err) {
    response.error(err);
  }
};

module.exports = {
  getExercises,
  createExercise,
};

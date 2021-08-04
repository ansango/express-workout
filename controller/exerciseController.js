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
  const newExercise = new Exercise(req.body);
  const exercises = await Exercise.find({});
  const exerciseCreated = exercises.find(
    (exercise) => exercise.name === newExercise.name
  );
  try {
    if (exerciseCreated) {
      response.badrequest(res, "exercise already exists");
    } else {
      const savedExercise = await newExercise.save();
      response.success(res, savedExercise);
    }
  } catch (err) {
    response.error(err);
  }
};

module.exports = {
  getExercises,
  createExercise,
};
